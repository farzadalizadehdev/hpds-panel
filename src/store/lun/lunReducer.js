import { updateObject } from "../../utility/Utility";
import * as actionTypes from "./actionTypes";

const initialState = {
  luns: null,
  loading: false,
  error: false,
  loadingCreateLun: false,
  loadingDeleteLun: false,
  loadingExtendLun: false,
  loadingAddToAcc: false,
  loadingRenameLun: false,
  operationLoading: false,
};

//fetch lun

const fetchLunStart = (state) => {
  return updateObject(state, {
    loading: true,
    error: false,
  });
};

const fetchLunSuccess = (state, action) => {
  return updateObject(state, {
    luns: action.luns,
    loading: false,
    error: false,
  });
};

const fetchLunFail = (state) => {
  return updateObject(state, {
    loading: false,
    error: true,
  });
};

//delete lun

const deleteLunStart = (state) => {
  return updateObject(state, {
    operationLoading: true,
    loadingDeleteLun: true,
    error: false,
  });
};

const deleteLunSuccess = (state) => {
  return updateObject(state, {
    operationLoading: false,
    loadingDeleteLun: false,
    error: false,
  });
};

const deleteLunFail = (state) => {
  return updateObject(state, {
    operationLoading: false,
    loadingDeleteLun: false,
    error: true,
  });
};

//extend lun

const extendLunStart = (state) => {
  return updateObject(state, {
    loadingExtendLun: true,
    operationLoading: true,
    error: false,
  });
};

const extendLunSuccess = (state) => {
  return updateObject(state, {
    loadingExtendLun: false,
    operationLoading: false,
    error: false,
  });
};

const extendLunFail = (state) => {
  return updateObject(state, {
    loadingExtendLun: false,
    operationLoading: false,
    error: true,
  });
};

//create lun

const createLunStart = (state) => {
  return updateObject(state, {
    loadingCreateLun: true,
    operationLoading: true,
    error: false,
  });
};

const createLunSuccess = (state) => {
  return updateObject(state, {
    loadingCreateLun: false,
    operationLoading: false,
    error: false,
  });
};

const createLunFail = (state) => {
  return updateObject(state, {
    loadingCreateLun: false,
    operationLoading: false,
    error: true,
  });
};

//add to acc

const addToAccStart = (state) => {
  return updateObject(state, {
    loadingAddToAcc: true,
    operationLoading: true,
    error: false,
  });
};

const addToAccSuccess = (state) => {
  return updateObject(state, {
    loadingAddToAcc: false,
    operationLoading: false,
    error: false,
  });
};

const addToAccFail = (state) => {
  return updateObject(state, {
    loadingAddToAcc: false,
    operationLoading: false,
    error: true,
  });
};

//rename lun

const renameLunStart = (state) => {
  return updateObject(state, {
    loadingRenameLun: true,
    operationLoading: true,
    error: false,
  });
};

const renameLunSuccess = (state) => {
  return updateObject(state, {
    loadingRenameLun: false,
    operationLoading: false,
    error: false,
  });
};

const renameLunFail = (state) => {
  return updateObject(state, {
    loadingRenameLun: false,
    operationLoading: false,
    error: true,
  });
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    //fetch luns
    case actionTypes.FETCH_LUN_START:
      return fetchLunStart(state, action);
    case actionTypes.FETCH_LUN_SUCCESS:
      return fetchLunSuccess(state, action);
    case actionTypes.FETCH_LUN_FAIL:
      return fetchLunFail(state, action);

    //delete lun
    case actionTypes.DELETE_LUN_START:
      return deleteLunStart(state, action);
    case actionTypes.DELETE_LUN_SUCCESS:
      return deleteLunSuccess(state, action);
    case actionTypes.DELETE_LUN_FAIL:
      return deleteLunFail(state, action);

    //extend lun
    case actionTypes.EXTEND_LUN_START:
      return extendLunStart(state, action);
    case actionTypes.EXTEND_LUN_SUCCESS:
      return extendLunSuccess(state, action);
    case actionTypes.EXTEND_LUN_FAIL:
      return extendLunFail(state, action);

    //create lun
    case actionTypes.CREATE_LUN_START:
      return createLunStart(state, action);
    case actionTypes.CREATE_LUN_SUCCESS:
      return createLunSuccess(state, action);
    case actionTypes.CREATE_LUN_FAIL:
      return createLunFail(state, action);

    //add lun to acc
    case actionTypes.ADD_TO_ACC_START:
      return addToAccStart(state, action);
    case actionTypes.ADD_TO_ACC_SUCCESS:
      return addToAccSuccess(state, action);
    case actionTypes.ADD_TO_ACC_FAIL:
      return addToAccFail(state, action);

    //rename lun
    case actionTypes.RENAME_LUN_START:
      return renameLunStart(state, action);
    case actionTypes.RENAME_LUN_SUCCESS:
      return renameLunSuccess(state, action);
    case actionTypes.RENAME_LUN_FAIL:
      return renameLunFail(state, action);

    default:
      return state;
  }
};

export default reducer;
