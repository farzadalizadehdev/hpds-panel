import { updateObject } from "../../utility/Utility";
import * as actionTypes from "./actionTypes";

const initialState = {
  accessControl: null,
  loading: false,
  error: false,
  loadingCreateAcc: false,
  loadingDeleteAcc: false,
  loadingSetAcc: false,
  operationLoading: false,
};

//fetch access control

const fetchAccStart = (state) => {
  return updateObject(state, {
    loading: true,
    error: false,
  });
};

const fetchAccSuccess = (state, action) => {
  return updateObject(state, {
    accessControl: action.accessControl,
    loading: false,
    error: false,
  });
};

const fetchAccFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
  });
};

//create access control

const createAccStart = (state) => {
  return updateObject(state, {
    loadingCreateAcc: true,
    operationLoading: true,
    error: false,
  });
};

const createAccSuccess = (state) => {
  return updateObject(state, {
    loadingCreateAcc: false,
    operationLoading: false,
    error: false,
  });
};

const createAccFail = (state) => {
  return updateObject(state, {
    loadingCreateAcc: false,
    operationLoading: false,
    error: true,
  });
};

//delete access control

const deleteAccStart = (state) => {
  return updateObject(state, {
    loadingDeleteAcc: true,
    operationLoading: true,
    error: false,
  });
};

const deleteAccSuccess = (state) => {
  return updateObject(state, {
    loadingDeleteAcc: false,
    operationLoading: false,
    error: false,
  });
};

const deleteAccFail = (state) => {
  return updateObject(state, {
    loadingDeleteAcc: false,
    operationLoading: false,
    error: true,
  });
};

//set access control

const setAccStart = (state) => {
  return updateObject(state, {
    loadingSetAcc: true,
    operationLoading: true,
    error: false,
  });
};

const setAccSuccess = (state) => {
  return updateObject(state, {
    loadingSetAcc: false,
    operationLoading: false,
    error: false,
  });
};

const setAccFail = (state) => {
  return updateObject(state, {
    loadingSetAcc: false,
    operationLoading: false,
    error: true,
  });
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    //fetch access control
    case actionTypes.FETCH_ACC_START:
      return fetchAccStart(state, action);
    case actionTypes.FETCH_ACC_SUCCESS:
      return fetchAccSuccess(state, action);
    case actionTypes.FETCH_ACC_FAIL:
      return fetchAccFail(state, action);
    //create access control
    case actionTypes.CREATE_ACC_START:
      return createAccStart(state, action);
    case actionTypes.CREATE_ACC_SUCCESS:
      return createAccSuccess(state, action);
    case actionTypes.CREATE_ACC_FAIL:
      return createAccFail(state, action);
    //delete access control
    case actionTypes.DELETE_ACC_START:
      return deleteAccStart(state, action);
    case actionTypes.DELETE_ACC_SUCCESS:
      return deleteAccSuccess(state, action);
    case actionTypes.DELETE_ACC_FAIL:
      return deleteAccFail(state, action);
    //set access control
    case actionTypes.SET_ACC_START:
      return setAccStart(state, action);
    case actionTypes.SET_ACC_SUCCESS:
      return setAccSuccess(state, action);
    case actionTypes.SET_ACC_FAIL:
      return setAccFail(state, action);
    default:
      return state;
  }
};

export default reducer;
