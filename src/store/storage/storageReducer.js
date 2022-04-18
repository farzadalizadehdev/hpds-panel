import { updateObject } from "../../utility/Utility";
import * as actionTypes from "./actionTypes";

const initialState = {
  storage: null,
  loading: false,
  error: false,
};

const fetchStorageStart = (state) => {
  return updateObject(state, {
    loading: true,
    error: false,
  });
};

const fetchStorageSuccess = (state, action) => {
  return updateObject(state, {
    storage: action.storage,
    loading: false,
    error: false,
  });
};

const fetchStorageFail = (state) => {
  return updateObject(state, {
    loading: false,
    error: true,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_STORAGE_START:
      return fetchStorageStart(state, action);
    case actionTypes.FETCH_STORAGE_SUCCESS:
      return fetchStorageSuccess(state, action);
    case actionTypes.FETCH_STORAGE_FAIL:
      return fetchStorageFail(state, action);
    default:
      return state;
  }
};

export default reducer;
