import { updateObject } from "../../../utility/Utility";
import * as actionType from "./actionTypes";

const initialState = {
  account: null,
  loading: false,
  error: false,
  loadingUpdate: false,
  //export
  loadingExport: false,
  exportAccount: null,
  //verify
  loadingVerify: false,
  verifyAccount: null,
  //import
  loadingImport: false,
  operationLoading: false,
};

//fetch account
const fetchAccountStart = (state) => {
  return updateObject(state, {
    loading: true,
    error: false,
  });
};

const fetchAccountSuccess = (state, action) => {
  return updateObject(state, {
    account: action.account,
    loading: false,
    error: false,
  });
};

const fetchAccountFail = (state) => {
  return updateObject(state, {
    loading: false,
    error: true,
  });
};

//update account
const updateAccountStart = (state) => {
  return updateObject(state, {
    operationLoading: true,
    loadingUpdate: true,
    error: false,
  });
};

const updateAccountSuccess = (state) => {
  return updateObject(state, {
    operationLoading: false,
    loadingUpdate: false,
    error: false,
  });
};

const updateAccountFail = (state) => {
  return updateObject(state, {
    operationLoading: false,
    loadingUpdate: false,
    error: true,
  });
};

//export account
const exportAccountStart = (state) => {
  return updateObject(state, {
    operationLoading: true,
    loadingExport: true,
    error: false,
  });
};

const exportAccountSuccess = (state, action) => {
  return updateObject(state, {
    operationLoading: false,
    loadingExport: false,
    error: false,
    exportAccount: action.exportAccount,
  });
};

const exportAccountFail = (state) => {
  return updateObject(state, {
    operationLoading: false,
    loadingExport: false,
    error: true,
  });
};

//verify account
const verifyAccountStart = (state) => {
  return updateObject(state, {
    operationLoading: true,
    loadingVerify: true,
    error: false,
  });
};

const verifyAccountSuccess = (state, action) => {
  return updateObject(state, {
    operationLoading: false,
    loadingVerify: false,
    error: false,
    verifyAccount: action.verifyAccount,
  });
};

const verifyAccountFail = (state) => {
  return updateObject(state, {
    operationLoading: false,
    loadingVerify: false,
    error: true,
  });
};

//import account
const importAccountStart = (state) => {
  return updateObject(state, {
    operationLoading: true,
    loadingImport: true,
    error: false,
  });
};

const importAccountSuccess = (state, action) => {
  return updateObject(state, {
    operationLoading: false,
    loadingImport: false,
    error: false,
    importAccount: action.importAccount,
  });
};

const importAccountFail = (state) => {
  return updateObject(state, {
    operationLoading: false,
    loadingImport: false,
    error: true,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //fetch account
    case actionType.FETCH_ACCOUNT_START:
      return fetchAccountStart(state, action);
    case actionType.FETCH_ACCOUNT_SUCCESS:
      return fetchAccountSuccess(state, action);
    case actionType.FETCH_ACCOUNT_FAIL:
      return fetchAccountFail(state, action);
    //update account
    case actionType.UPDATE_ACCOUNT_START:
      return updateAccountStart(state, action);
    case actionType.UPDATE_ACCOUNT_SUCCESS:
      return updateAccountSuccess(state, action);
    case actionType.UPDATE_ACCOUNT_FAIL:
      return updateAccountFail(state, action);
    //export account
    case actionType.EXPORT_ACCOUNT_START:
      return exportAccountStart(state, action);
    case actionType.EXPORT_ACCOUNT_SUCCESS:
      return exportAccountSuccess(state, action);
    case actionType.EXPORT_ACCOUNT_FAIL:
      return exportAccountFail(state, action);
    //verify account
    case actionType.VERIFY_ACCOUNT_START:
      return verifyAccountStart(state, action);
    case actionType.VERIFY_ACCOUNT_SUCCESS:
      return verifyAccountSuccess(state, action);
    case actionType.VERIFY_ACCOUNT_FAIL:
      return verifyAccountFail(state, action);
    //import account
    case actionType.IMPORT_ACCOUNT_START:
      return importAccountStart(state, action);
    case actionType.IMPORT_ACCOUNT_SUCCESS:
      return importAccountSuccess(state, action);
    case actionType.IMPORT_ACCOUNT_FAIL:
      return importAccountFail(state, action);
    default:
      return state;
  }
};

export default reducer;
