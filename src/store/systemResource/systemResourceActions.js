import * as actionTypes from "./actionTypes";
import api_url from "../../api/api";
import axios from "../../api/axios";

export const fetchResourceStart = () => {
  return {
    type: actionTypes.FETCH_RESOURCE_START,
  };
};

export const fetchResourceSuccess = (resource) => {
  return {
    type: actionTypes.FETCH_RESOURCE_SUCCESS,
    resource: resource,
  };
};

export const fetchResourceFail = () => {
  return {
    type: actionTypes.FETCH_RESOURCE_FAIL,
  };
};

export const initFetchResource = () => {
  return (dispatch) => {
    dispatch(fetchResourceStart());
    const method = {
      method: "system.resources",
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(fetchResourceSuccess(res.data.data));
        } else {
          dispatch(fetchResourceFail());
        }
      })
      .catch(() => {
        dispatch(fetchResourceFail());
      });
  };
};
