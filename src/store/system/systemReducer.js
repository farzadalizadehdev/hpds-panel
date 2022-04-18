import { updateObject } from "../../utility/Utility";
import * as actionTypes from "./actionTypes";

const initialState = {
  loading: false,
  error: false,
  export: null,
  loadingExport: false,
  status: null,
  loadingStatus: false,
  loadingReboot: false,
  loadingShutdown: false,
  loadingUpdate: false,
  operationLoading: false,
};

//update system
const updateSystemStart = (state) => {
  return updateObject(state, {
    operationLoading: true,
    loadingUpdate: true,
    error: false,
  });
};

const updateSystemSuccess = (state) => {
  return updateObject(state, {
    operationLoading: false,
    loadingUpdate: false,
    error: false,
  });
};

const updateSystemFail = (state) => {
  return updateObject(state, {
    operationLoading: false,
    loadingUpdate: false,
    error: true,
  });
};

//export system log
const exportLogStart = (state) => {
  return updateObject(state, {
    operationLoading: true,
    loadingExport: true,
    error: false,
  });
};

const exportLogSuccess = (state, action) => {
  return updateObject(state, {
    export: action.export,
    operationLoading: false,
    loadingExport: false,
    error: false,
  });
};

const exportLogFail = (state) => {
  return updateObject(state, {
    operationLoading: false,
    loadingExport: false,
    error: true,
  });
};

//check system status
const checkStatusStart = (state) => {
  return updateObject(state, {
    operationLoading: true,
    loadingStatus: true,
    error: false,
  });
};

const checkStatusSuccess = (state, action) => {
  return updateObject(state, {
    status: action.status,
    operationLoading: false,
    loadingStatus: false,
    error: false,
  });
};

const checkStatusFail = (state, action) => {
  return updateObject(state, {
    status: action.status,
    loadingStatus: false,
    operationLoading: false,
    error: true,
  });
};

//reboot system
const rebootSystemStart = (state) => {
  return updateObject(state, {
    operationLoading: true,
    loadingReboot: true,
    error: false,
  });
};

const rebootSystemSuccess = (state) => {
  return updateObject(state, {
    operationLoading: false,
    loadingReboot: false,
    error: false,
  });
};

const rebootSystemFail = (state) => {
  return updateObject(state, {
    operationLoading: false,
    loadingReboot: false,
    error: true,
  });
};
//shutdown system
const shutdownSystemStart = (state) => {
  return updateObject(state, {
    operationLoading: true,
    loadingShutdown: true,
    error: false,
  });
};

const shutdownSystemSuccess = (state) => {
  return updateObject(state, {
    operationLoading: false,
    loadingShutdown: false,
    error: false,
  });
};

const shutdownSystemFail = (state) => {
  return updateObject(state, {
    loadingShutdown: false,
    operationLoading: false,
    error: true,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //update system
    case actionTypes.UPDATE_SYSTEM_START:
      return updateSystemStart(state, action);
    case actionTypes.UPDATE_SYSTEM_SUCCESS:
      return updateSystemSuccess(state, action);
    case actionTypes.UPDATE_SYSTEM_FAIL:
      return updateSystemFail(state, action);
    //export system log
    case actionTypes.EXPORT_LOG_START:
      return exportLogStart(state, action);
    case actionTypes.EXPORT_LOG_SUCCESS:
      return exportLogSuccess(state, action);
    case actionTypes.EXPORT_LOG_FAIL:
      return exportLogFail(state, action);
    //check system status
    case actionTypes.CHECK_STATUS_START:
      return checkStatusStart(state, action);
    case actionTypes.CHECK_STATUS_SUCCESS:
      return checkStatusSuccess(state, action);
    case actionTypes.CHECK_STATUS_FAIL:
      return checkStatusFail(state, action);
    //reboot system
    case actionTypes.REBOOT_SYSTEM_START:
      return rebootSystemStart(state, action);
    case actionTypes.REBOOT_SYSTEM_SUCCESS:
      return rebootSystemSuccess(state, action);
    case actionTypes.REBOOT_SYSTEM_FAIL:
      return rebootSystemFail(state, action);
    //shutdown system
    case actionTypes.SHUTDOWN_SYSTEM_START:
      return shutdownSystemStart(state, action);
    case actionTypes.SHUTDOWN_SYSTEM_SUCCESS:
      return shutdownSystemSuccess(state, action);
    case actionTypes.SHUTDOWN_SYSTEM_FAIL:
      return shutdownSystemFail(state, action);
    default:
      return state;
  }
};

export default reducer;
