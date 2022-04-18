import { updateObject } from "../../utility/Utility";
import * as actionTypes from "./actionTypes";

const initialState = {
  driveGroup: null,
  loading: false,
  error: false,
};

const fetchDriveStart = (state, action) => {
  return updateObject(state, {
    loading: true,
    error: false,
  });
};

const fetchDriveSuccess = (state, action) => {
  return updateObject(state, {
    driveGroup: action.driveGroup,
    loading: false,
    error: false,
  });
};

const fetchDriveFail = (state) => {
  return updateObject(state, {
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DRIVE_START:
      return fetchDriveStart(state, action);
    case actionTypes.FETCH_DRIVE_SUCCESS:
      return fetchDriveSuccess(state, action);
    case actionTypes.FETCH_DRIVE_FAIL:
      return fetchDriveFail(state, action);
    default:
      return state;
  }
};

export default reducer;
