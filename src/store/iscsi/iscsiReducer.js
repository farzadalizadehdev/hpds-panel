import { updateObject } from "../../utility/Utility";
import * as actionTypes from "./actionTypes";

const initialState = {
  iscsi: null,
  loading: false,
  error: false,
  loadingSet: false,
  operationLoading: false,
};

const fetchIscsiStart = (state, action) => {
  return updateObject(state, {
    loading: true,
    error: false,
  });
};

const fetchIscsiSuccess = (state, action) => {
  return updateObject(state, {
    iscsi: action.iscsi,
    loading: false,
    error: false,
  });
};

const fetchIscsiFail = (state) => {
  return updateObject(state, {
    loading: false,
    error: true,
  });
};

const setIscsiStart = (state) => {
  return updateObject(state, {
    loadingSet: true,
    operationLoading: true,
    error: false,
  });
};

const setIscsiSuccess = (state) => {
  return updateObject(state, {
    loadingSet: false,
    operationLoading: false,
    error: false,
  });
};

const setIscsiFail = (state) => {
  return updateObject(state, {
    loadingSet: false,
    operationLoading: false,
    error: true,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ISCSI_START:
      return fetchIscsiStart(state, action);
    case actionTypes.FETCH_ISCSI_SUCCESS:
      return fetchIscsiSuccess(state, action);
    case actionTypes.FETCH_ISCSI_FAIL:
      return fetchIscsiFail(state, action);
    case actionTypes.SET_ISCSI_START:
      return setIscsiStart(state, action);
    case actionTypes.SET_ISCSI_SUCCESS:
      return setIscsiSuccess(state, action);
    case actionTypes.SET_ISCSI_FAIL:
      return setIscsiFail(state, action);
    default:
      return state;
  }
};

export default reducer;
