import * as actionTypes from './actionTypes'
//api
import api_url from '../../api/api'
import axios from '../../api/axios'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}
export const authSuccess = (username, token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        username: username,
        token: token
    }
}
export const authFail = () => {
    return {
        type: actionTypes.AUTH_FAIL,
    }
}
export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(()=> {
            dispatch(logout())
        },expirationTime * 1000)
    }
}

export const auth = (username, password) => {
    return dispatch => {
        dispatch(authStart())
        const authData = {
            params: {
                username: username,
                password: password,
                "get-token": true
            }
        }
        axios.post(api_url, authData)
            .then(res => {
                if (!res.data.error) {
                    const expirationDate = new Date(new Date().getTime() + res.data.data.expire_timestamp / 1000)
                    localStorage.setItem('token', res.data.data.token)
                    localStorage.setItem('username', res.data.data.username)
                    localStorage.setItem('exprationDate', expirationDate)
                    dispatch(authSuccess(res.data.data.username, res.data.data.token))
                    // dispatch(checkAuthTimeout(expirationDate))
                } else {
                    dispatch(authFail())
                }
            })
            .catch (err => {
                dispatch(authFail())
            })
    }
}
export const logout = () => {

    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('exprationDate');
    localStorage.removeItem('sabOs');

    return {
        type: actionTypes.AUTH_LOGOUT
    }
}
export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        if (!token) {
            dispatch(logout())
        } else {
            const username = localStorage.getItem('username')
            dispatch(authSuccess(username,token))
            const expirationDate = new Date(localStorage.getItem('exprationDate'))
            if (expirationDate <= new Date()){
                dispatch(logout())
            }else {
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
            }
        }
    }
}