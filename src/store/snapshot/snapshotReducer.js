import { updateObject } from "../../utility/Utility";
import * as actionTypes from "./actionTypes";

const initialState = {
  snapShot: null,
  loading: false,
  error: false,
  loadingCreateSnapShot: false,
  loadingExtentSnapShot: false,
  loadingDeleteSnapShot: false,
  loadingrestoreSnapShot: false,
  operationLoading: false,
};

//fetch snap shot

const fetchSnapShotStart = (state) => {
  return updateObject(state, {
    loading: true,
    error: false,
  });
};

const fetchSnapShotSuccess = (state, action) => {
  return updateObject(state, {
    snapShot: action.snapShot,
    loading: false,
    error: false,
  });
};

const fetchSnapShotFail = (state) => {
  return updateObject(state, {
    loading: false,
    error: true,
  });
};

//create snap shot

const createSnapShotStart = (state) => {
  return updateObject(state, {
    loadingCreateSnapShot: true,
    operationLoading: true,
    error: false,
  });
};

const createSnapShotSuccess = (state) => {
  return updateObject(state, {
    loadingCreateSnapShot: false,
    operationLoading: false,
    error: false,
  });
};

const createSnapShotFail = (state) => {
  return updateObject(state, {
    loadingCreateSnapShot: false,
    operationLoading: false,
    error: true,
  });
};

//extend snap shot

const extendSnapShotStart = (state) => {
  return updateObject(state, {
    loadingExtentSnapShot: true,
    operationLoading: true,
    error: false,
  });
};

const extendSnapShotSuccess = (state) => {
  return updateObject(state, {
    loadingExtentSnapShot: false,
    operationLoading: false,
    error: false,
  });
};

const extendSnapShotFail = (state) => {
  return updateObject(state, {
    loadingExtentSnapShot: false,
    operationLoading: false,
    error: true,
  });
};

//delete snap shot

const deleteSnapShotStart = (state) => {
  return updateObject(state, {
    loadingDeleteSnapShot: true,
    operationLoading: true,
    error: false,
  });
};

const deleteSnapShotSuccess = (state) => {
  return updateObject(state, {
    operationLoading: false,
    loadingDeleteSnapShot: false,
    error: false,
  });
};

const deleteSnapShotFail = (state) => {
  return updateObject(state, {
    operationLoading: false,
    loadingDeleteSnapShot: false,
    error: true,
  });
};

//restore snap shot

const restoreSnapShotStart = (state) => {
  return updateObject(state, {
    loadingrestoreSnapShot: true,
    operationLoading: true,
    error: false,
  });
};

const restoreSnapShotSuccess = (state) => {
  return updateObject(state, {
    loadingrestoreSnapShot: false,
    operationLoading: false,
    error: false,
  });
};

const restoreSnapShotFail = (state) => {
  return updateObject(state, {
    operationLoading: false,
    loadingrestoreSnapShot: false,
    error: true,
  });
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    //fetch snap shot
    case actionTypes.FETCH_SNAPSHOT_START:
      return fetchSnapShotStart(state, action);
    case actionTypes.FETCH_SNAPSHOT_SUCCESS:
      return fetchSnapShotSuccess(state, action);
    case actionTypes.FETCH_SNAPSHOT_FAIL:
      return fetchSnapShotFail(state, action);
    //create snap shot
    case actionTypes.CREATE_SNAPSHOT_START:
      return createSnapShotStart(state, action);
    case actionTypes.CREATE_SNAPSHOT_SUCCESS:
      return createSnapShotSuccess(state, action);
    case actionTypes.CREATE_SNAPSHOT_FAIL:
      return createSnapShotFail(state, action);
    //extend snap shot
    case actionTypes.EXTEND_SNAPSHOT_START:
      return extendSnapShotStart(state, action);
    case actionTypes.EXTEND_SNAPSHOT_SUCCESS:
      return extendSnapShotSuccess(state, action);
    case actionTypes.EXTEND_SNAPSHOT_FAIL:
      return extendSnapShotFail(state, action);
    //delete snap shot
    case actionTypes.DELETE_SNAPSHOT_START:
      return deleteSnapShotStart(state, action);
    case actionTypes.DELETE_SNAPSHOT_SUCCESS:
      return deleteSnapShotSuccess(state, action);
    case actionTypes.DELETE_SNAPSHOT_FAIL:
      return deleteSnapShotFail(state, action);
    //restore snap shot
    case actionTypes.RESTORE_SNAPSHOT_START:
      return restoreSnapShotStart(state, action);
    case actionTypes.RESTORE_SNAPSHOT_SUCCESS:
      return restoreSnapShotSuccess(state, action);
    case actionTypes.RESTORE_SNAPSHOT_FAIL:
      return restoreSnapShotFail(state, action);

    default:
      return state;
  }
};

export default reducer;
