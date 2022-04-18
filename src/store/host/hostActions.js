import * as actionTypes from "./actionTypes";
import api_url from "../../api/api";
import axios from "../../api/axios";
import { initFetchInitiator } from "../initiator/actions/actions";

//fetch host

export const fetchHostStart = () => {
  return {
    type: actionTypes.FETCH_HOST_START,
  };
};

export const fetchHostSuccess = (hosts) => {
  return {
    type: actionTypes.FETCH_HOST_SUCCESS,
    hosts: hosts,
  };
};

export const fetchHostFail = () => {
  return {
    type: actionTypes.FETCH_HOST_FAIL,
  };
};

export const initFetchHost = () => {
  return (dispatch) => {
    dispatch(fetchHostStart());
    const method = {
      method: "host.show",
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(fetchHostSuccess(res.data.data));
        } else {
          dispatch(fetchHostFail());
        }
      })
      .catch(() => {
        dispatch(fetchHostFail());
      });
  };
};

//delete host

export const deleteHostStart = () => {
  return {
    type: actionTypes.DELETE_HOST_START,
  };
};

export const deleteHostSuccess = () => {
  return {
    type: actionTypes.DELETE_HOST_SUCCESS,
  };
};

export const deleteHostFail = () => {
  return {
    type: actionTypes.DELETE_HOST_FAIL,
  };
};

export const initDeleteHost = (hostName) => {
  return (dispatch) => {
    dispatch(deleteHostStart());
    const params = {
      name: hostName,
    };
    const method = {
      method: "host.delete",
      params,
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(deleteHostSuccess());
          dispatch(initFetchHost());
          dispatch(initFetchInitiator());
        } else {
          dispatch(deleteHostFail());
        }
      })
      .catch(() => {
        dispatch(deleteHostFail());
      });
  };
};

//create host

export const createHostStart = () => {
  return {
    type: actionTypes.CREATE_HOST_START,
  };
};

export const createHostSuccess = () => {
  return {
    type: actionTypes.CREATE_HOST_SUCCESS,
  };
};

export const createHostFail = () => {
  return {
    type: actionTypes.CREATE_HOST_FAIL,
  };
};

export const initCreateHost = (params) => {
  return (dispatch) => {
    dispatch(createHostStart());
    const method = {
      method: "host.create",
      params: params,
    };

    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(createHostSuccess());
          dispatch(initFetchHost());
          dispatch(initFetchInitiator());
        } else {
          dispatch(createHostFail());
        }
      })
      .catch(() => {
        dispatch(createHostFail());
      });
  };
};

//set host

export const setHostStart = () => {
  return {
    type: actionTypes.SET_HOST_START,
  };
};

export const setHostSuccess = () => {
  return {
    type: actionTypes.SET_HOST_SUCCESS,
  };
};

export const setHostFail = () => {
  return {
    type: actionTypes.SET_HOST_FAIL,
  };
};

export const initSetHost = (params) => {
  return (dispatch) => {
    dispatch(setHostStart());
    const method = {
      method: "host.set",
      params: params,
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(setHostSuccess());
          dispatch(initFetchHost());
          dispatch(initFetchInitiator());
        } else {
          dispatch(setHostFail());
        }
      })
      .catch(() => {
        dispatch(setHostFail());
      });
  };
};
