import { updateObject } from "../../utility/Utility";
import * as actionTypes from "./actionTypes";

const initialState = {
  disk: null,
  loading: false,
  error: false,
};

const fetchDiskStart = (state) => {
  return updateObject(state, {
    loading: true,
    error: false,
  });
};

const fetchDiskSuccess = (state, action) => {
  return updateObject(state, {
    disk: action.disk,
    loading: false,
    error: false,
  });
};

const fetchDiskFail = (state) => {
  return updateObject(state, {
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DISK_START:
      return fetchDiskStart(state, action);
    case actionTypes.FETCH_DISK_SUCCESS:
      return fetchDiskSuccess(state, action);
    case actionTypes.FETCH_DISK_FAIL:
      return fetchDiskFail(state, action);
    default:
      return state;
  }
};

export default reducer;
