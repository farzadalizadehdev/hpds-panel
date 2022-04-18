import { updateObject } from "../../utility/Utility";
import * as actionTypes from "./actionTypes";

const initialState = {
  rapidstore: null,
  loading: false,
  error: false,
  status: null,
  statusLoading: false,
  statusError: false,
  operationLoading: false,
  loadingCreate: false,
  loadingDelete: false,
};

//fetch rapidstore

const fetchRapidstoreStart = (state) => {
  return updateObject(state, {
    loading: true,
    error: false,
  });
};

const fetchRapidstoreSuccess = (state, action) => {
  return updateObject(state, {
    rapidstore: action.rapidstore,
    loading: false,
    error: false,
  });
};

const fetchRapidstoreFail = (state) => {
  return updateObject(state, {
    loading: false,
    error: true,
  });
};

//fetch rapidstore status

const fetchRapidstoreStatusStart = (state) => {
  return updateObject(state, {
    loadingStatus: true,
    statusError: false,
  });
};

const fetchRapidstoreStatusSuccess = (state, action) => {
  return updateObject(state, {
    status: action.status,
    loadingStatus: false,
    statusError: false,
  });
};

const fetchRapidstoreStatusFail = (state, action) => {
  return updateObject(state, {
    loadingStatus: false,
    statusError: action.error,
  });
};

//delete rapidstore

const deleteRapidstoreStart = (state) => {
  return updateObject(state, {
    loadingDelete: true,
    operationLoading: true,
    error: false,
  });
};

const deleteRapidstoreSuccess = (state) => {
  return updateObject(state, {
    loadingDelete: false,
    operationLoading: false,
    error: false,
  });
};

const deleteRapidstoreFail = (state) => {
  return updateObject(state, {
    loadingDelete: false,
    operationLoading: false,
    error: true,
  });
};

//create rapidstore

const createRapidstoreStart = (state) => {
  return updateObject(state, {
    loadingCreate: true,
    operationLoading: true,
    error: false,
  });
};

const createRapidstoreSuccess = (state) => {
  return updateObject(state, {
    loadingCreate: false,
    operationLoading: false,
    error: false,
  });
};

const createRapidstoreFail = (state) => {
  return updateObject(state, {
    loadingCreate: false,
    operationLoading: false,
    error: true,
  });
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    //fetch rapidstore
    case actionTypes.FETCH_RAPIDSTORE_START:
      return fetchRapidstoreStart(state, action);
    case actionTypes.FETCH_RAPIDSTORE_SUCCESS:
      return fetchRapidstoreSuccess(state, action);
    case actionTypes.FETCH_RAPIDSTORE_FAIL:
      return fetchRapidstoreFail(state, action);

    //delete rapidstore
    case actionTypes.DELETE_RAPIDSTORE_START:
      return deleteRapidstoreStart(state, action);
    case actionTypes.DELETE_RAPIDSTORE_SUCCESS:
      return deleteRapidstoreSuccess(state, action);
    case actionTypes.DELETE_RAPIDSTORE_FAIL:
      return deleteRapidstoreFail(state, action);

    //create lun
    case actionTypes.CREATE_RAPIDSTORE_START:
      return createRapidstoreStart(state, action);
    case actionTypes.CREATE_RAPIDSTORE_SUCCESS:
      return createRapidstoreSuccess(state, action);
    case actionTypes.CREATE_RAPIDSTORE_FAIL:
      return createRapidstoreFail(state, action);

    //fetch rapidstore status
    case actionTypes.FETCH_RAPIDSTORE_STATUS_START:
      return fetchRapidstoreStatusStart(state, action);
    case actionTypes.FETCH_RAPIDSTORE_STATUS_SUCCESS:
      return fetchRapidstoreStatusSuccess(state, action);
    case actionTypes.FETCH_RAPIDSTORE_STATUS_FAIL:
      return fetchRapidstoreStatusFail(state, action);

    default:
      return state;
  }
};

export default reducer;
