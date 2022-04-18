import { updateObject } from "../../utility/Utility";
import * as actionTypes from "./actionTypes";

const initialState = {
  hosts: null,
  loading: false,
  error: false,
  loadingCreateHost: false,
  loadingDeleteHost: false,
  loadingSetHost: false,
  operationLoading: false,
};

//fetch host

const fetchHostStart = (state) => {
  return updateObject(state, {
    loading: true,
    error: false,
  });
};

const fetchHostSuccess = (state, action) => {
  return updateObject(state, {
    hosts: action.hosts,
    loading: false,
    error: false,
  });
};

const fetchHostFail = (state) => {
  return updateObject(state, {
    loading: false,
    error: true,
  });
};

//delete host

const deleteHostStart = (state) => {
  return updateObject(state, {
    operationLoading: true,
    loadingDeleteHost: true,
    error: false,
  });
};

const deleteHostSuccess = (state) => {
  return updateObject(state, {
    operationLoading: false,
    loadingDeleteHost: false,
    error: false,
  });
};

const deleteHostFail = (state, action) => {
  return updateObject(state, {
    operationLoading: false,
    loadingDeleteHost: false,
    error: true,
  });
};

//create host

const createHostStart = (state) => {
  return updateObject(state, {
    operationLoading: true,
    loadingCreateHost: true,
    error: false,
  });
};

const createHostSuccess = (state) => {
  return updateObject(state, {
    operationLoading: false,
    loadingCreateHost: false,
    error: false,
  });
};

const createHostFail = (state) => {
  return updateObject(state, {
    operationLoading: false,
    loadingCreateHost: false,
    error: true,
  });
};

//set host

const setHostStart = (state) => {
  return updateObject(state, {
    operationLoading: true,
    loadingSetHost: true,
    error: false,
  });
};

const setHostSuccess = (state) => {
  return updateObject(state, {
    operationLoading: false,
    loadingSetHost: false,
    error: false,
  });
};

const setHostFail = (state) => {
  return updateObject(state, {
    operationLoading: false,
    loadingSetHost: false,
    error: true,
  });
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    //fetch host
    case actionTypes.FETCH_HOST_START:
      return fetchHostStart(state, action);
    case actionTypes.FETCH_HOST_SUCCESS:
      return fetchHostSuccess(state, action);
    case actionTypes.FETCH_HOST_FAIL:
      return fetchHostFail(state, action);

    //delete host
    case actionTypes.DELETE_HOST_START:
      return deleteHostStart(state, action);
    case actionTypes.DELETE_HOST_SUCCESS:
      return deleteHostSuccess(state, action);
    case actionTypes.DELETE_HOST_FAIL:
      return deleteHostFail(state, action);

    //create host
    case actionTypes.CREATE_HOST_START:
      return createHostStart(state, action);
    case actionTypes.CREATE_HOST_SUCCESS:
      return createHostSuccess(state, action);
    case actionTypes.CREATE_HOST_FAIL:
      return createHostFail(state, action);

    //set host
    case actionTypes.SET_HOST_START:
      return setHostStart(state, action);
    case actionTypes.SET_HOST_SUCCESS:
      return setHostSuccess(state, action);
    case actionTypes.SET_HOST_FAIL:
      return setHostFail(state, action);

    default:
      return state;
  }
};

export default reducer;
