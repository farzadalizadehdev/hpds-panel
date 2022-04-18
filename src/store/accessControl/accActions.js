import * as actionTypes from "./actionTypes";
import { initFetchLun } from '../lun/lunActions'
import { initFetchHost } from '../host/hostActions'

//api
import api_url from "../../api/api";
import axios from "../../api/axios";

//fetch access control

export const fetchAccStart = () => {
  return {
    type: actionTypes.FETCH_ACC_START,
  };
};

export const fetchAccSuccess = (accessControl) => {
  return {
    type: actionTypes.FETCH_ACC_SUCCESS,
    accessControl: accessControl,
  };
};

export const fetchAccFail = () => {
  return {
    type: actionTypes.FETCH_ACC_FAIL,
  };
};

export const initFetchAcc = () => {
  return (dispatch) => {
    dispatch(fetchAccStart());
    const method = {
      method: "acc.show",
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(fetchAccSuccess(res.data.data));
        } else {
          dispatch(fetchAccFail());
        }
      })
      .catch(() => {
        dispatch(fetchAccFail());
      });
  };
};

//create access control

export const createAccStart = () => {
  return {
    type: actionTypes.CREATE_ACC_START,
  };
};

export const createAccSuccess = () => {
  return {
    type: actionTypes.CREATE_ACC_SUCCESS,
  };
};

export const createAccFail = () => {
  return {
    type: actionTypes.CREATE_ACC_FAIL,
  };
};

export const initCreateAcc = (params) => {
  return (dispatch) => {
    dispatch(createAccStart());
    const method = {
      method: "acc.create",
      params: params,
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(createAccSuccess());
          dispatch(initFetchAcc());
          dispatch(initFetchHost());
        } else {
          dispatch(createAccFail());
        }
      })
      .catch(() => {
        dispatch(createAccFail());
      });
  };
};

//delete access control

export const deleteAccStart = () => {
  return {
    type: actionTypes.DELETE_ACC_START,
  };
};

export const deleteAccSuccess = () => {
  return {
    type: actionTypes.DELETE_ACC_SUCCESS,
  };
};

export const deleteAccFail = () => {
  return {
    type: actionTypes.DELETE_ACC_FAIL,
  };
};

export const initDeleteAcc = (accName) => {
  return (dispatch) => {
    dispatch(deleteAccStart());
    const params = {
      name: accName,
    };
    const method = {
      method: "acc.delete",
      params,
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(deleteAccSuccess());
          dispatch(initFetchAcc());
          dispatch(initFetchHost());
        } else {
          dispatch(deleteAccFail());
        }
      })
      .catch(() => {
        dispatch(deleteAccFail());
      });
  };
};

//set access control

export const setAccStart = () => {
  return {
    type: actionTypes.SET_ACC_START,
  };
};

export const setAccSuccess = () => {
  return {
    type: actionTypes.SET_ACC_SUCCESS,
  };
};

export const setAccFail = () => {
  return {
    type: actionTypes.SET_ACC_FAIL,
  };
};

export const initSetAcc = (params) => {
  return (dispatch) => {
    dispatch(setAccStart());
    const method = {
      method: "acc.set",
      params: params,
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(setAccSuccess());
          dispatch(initFetchAcc());
          dispatch(initFetchLun());
        } else {
          dispatch(setAccFail());
        }
      })
      .catch(() => {
        dispatch(setAccFail());
      });
  };
};
