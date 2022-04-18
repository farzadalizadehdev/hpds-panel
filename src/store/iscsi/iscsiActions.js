import * as actionTypes from "./actionTypes";
import api_url from "../../api/api";
import axios from "../../api/axios";

export const fetchIscsiStart = () => {
  return {
    type: actionTypes.FETCH_ISCSI_START,
  };
};

export const fetchIscsiSuccess = (iscsi) => {
  return {
    type: actionTypes.FETCH_ISCSI_SUCCESS,
    iscsi: iscsi,
  };
};

export const fetchIscsiFail = () => {
  return {
    type: actionTypes.FETCH_ISCSI_FAIL,
  };
};

export const initFetchIscsi = () => {
  return (dispatch) => {
    dispatch(fetchIscsiStart());
    const method = {
      method: "iscsi.show",
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(fetchIscsiSuccess(res.data.data));
        } else {
          dispatch(fetchIscsiFail());
        }
      })
      .catch(() => {
        dispatch(fetchIscsiFail());
      });
  };
};

//set iscsi
export const setIscsiStart = () => {
  return {
    type: actionTypes.SET_ISCSI_START,
  };
};

export const setIscsiSuccess = () => {
  return {
    type: actionTypes.SET_ISCSI_SUCCESS,
  };
};

export const setIscsiFail = () => {
  return {
    type: actionTypes.SET_ISCSI_FAIL,
  };
};

export const initSetIscsi = (params) => {
  return (dispatch) => {
    dispatch(setIscsiStart());
    const method = {
      method: "iscsi.set",
      params: params,
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(setIscsiSuccess(res.data.data));
        } else {
          dispatch(setIscsiFail());
        }
      })
      .catch(() => {
        dispatch(setIscsiFail());
      });
  };
};
