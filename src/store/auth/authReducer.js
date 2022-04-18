import { updateObject } from '../../utility/Utility';
import * as actionTypes from './actionTypes';

const initialState = {
    username: null,
    token: localStorage.getItem('token') || null,
    error: null,
    loading: false
}
const authStart = (state) => {
    return updateObject(state, {
        error: null,
        loading: true
    })
}
const authSuccess = (state, action) => {
    return updateObject(state, {
        username: action.username,
        token: action.token,
        loading: false
    })
}
const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}
const authLogout = (state) => {
    return updateObject(state, {
        token: null,
        username: null
    })
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return authStart(state, action)
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action)
        case actionTypes.AUTH_FAIL:
            return authFail(state, action)
        case actionTypes.AUTH_LOGOUT:
            return authLogout(state, action)
        default:
            return state;
    }
}

export default reducer