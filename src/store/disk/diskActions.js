import * as actionTypes from "./actionTypes";
import api_url from "../../api/api";
import axios from "../../api/axios";

export const fetchDiskStart = () => {
  return {
    type: actionTypes.FETCH_DISK_START,
  };
};

export const fetchDiskSuccess = (disk) => {
  return {
    type: actionTypes.FETCH_DISK_SUCCESS,
    disk: disk,
  };
};

export const fetchDiskFail = () => {
  return {
    type: actionTypes.FETCH_DISK_FAIL,
  };
};

export const initFetchDisk = () => {
  return (dispatch) => {
    dispatch(fetchDiskStart());
    const method = {
      method: "profile.show",
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(fetchDiskSuccess(res.data.data));
        } else {
          dispatch(fetchDiskFail());
        }
      })
      .catch(() => {
        dispatch(fetchDiskFail());
      });
  };
};
