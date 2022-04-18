import * as actionTypes from "./actionTypes";
import api_url from "../../api/api";
import axios from "../../api/axios";

export const fetchStorageStart = () => {
  return {
    type: actionTypes.FETCH_STORAGE_START,
  };
};

export const fetchStorageSuccess = (storage) => {
  return {
    type: actionTypes.FETCH_STORAGE_SUCCESS,
    storage: storage,
  };
};

export const fetchStorageFail = () => {
  return {
    type: actionTypes.FETCH_STORAGE_FAIL,
  };
};

export const initStorage = () => {
  return (dispatch) => {
    dispatch(fetchStorageStart());
    const method = {
      method: "performance.report",
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(fetchStorageSuccess(res.data.data));
        } else {
          dispatch(fetchStorageFail());
        }
      })
      .catch(() => {
        dispatch(fetchStorageFail());
      });
  };
};
