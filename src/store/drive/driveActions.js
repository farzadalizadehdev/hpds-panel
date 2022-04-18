import * as actionTypes from "./actionTypes";
import api_url from "../../api/api";
import axios from "../../api/axios";

export const fetchDriveStart = () => {
  return {
    type: actionTypes.FETCH_DRIVE_START,
  };
};

export const fetchDriveSuccess = (driveGroup) => {
  return {
    type: actionTypes.FETCH_DRIVE_SUCCESS,
    driveGroup: driveGroup,
  };
};

export const fetchDriveFail = () => {
  return {
    type: actionTypes.FETCH_DRIVE_FAIL,
  };
};

export const initFetchDrive = () => {
  return (dispatch) => {
    dispatch(fetchDriveStart());
    const method = {
      method: "drive-group.show",
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(fetchDriveSuccess(res.data.data));
        } else {
          dispatch(fetchDriveFail());
        }
      })
      .catch(() => {
        dispatch(fetchDriveFail());
      });
  };
};
