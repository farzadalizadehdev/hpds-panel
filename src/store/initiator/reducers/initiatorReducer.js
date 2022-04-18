import { updateObject } from "../../../utility/Utility";
import * as actionTypes from "../actions/types";

const initialState = {
  initiators: null,
  loading: false,
  error: false,
  operationLoading: false,
  loadingAddToHost: false,
};

//fetch initiator

const fetchInitiatorStart = (state) => {
  return updateObject(state, {
    loading: true,
    error: false,
  });
};

const fetchInitiatorSuccess = (state, action) => {
  return updateObject(state, {
    initiators: action.initiators,
    loading: false,
    error: false,
  });
};

const fetchInitiatorFail = (state) => {
  return updateObject(state, {
    loading: false,
    error: true,
  });
};

//add to host initiator

const addToHostStart = (state) => {
  return updateObject(state, {
    loadingAddToHost: true,
    operationLoading: true,
    error: false,
  });
};

const addToHostSuccess = (state) => {
  return updateObject(state, {
    loadingAddToHost: false,
    operationLoading: false,
    error: false,
  });
};

const addToHostFail = (state) => {
  return updateObject(state, {
    loadingAddToHost: false,
    operationLoading: false,
    error: true,
  });
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    //fetch initiator
    case actionTypes.FETCH_INITIATOR_START:
      return fetchInitiatorStart(state, action);
    case actionTypes.FETCH_INITIATOR_SUCCESS:
      return fetchInitiatorSuccess(state, action);
    case actionTypes.FETCH_INITIATOR_FAIL:
      return fetchInitiatorFail(state, action);

    //add to host initiator
    case actionTypes.ADD_TO_HOST_START:
      return addToHostStart(state, action);
    case actionTypes.ADD_TO_HOST_SUCCESS:
      return addToHostSuccess(state, action);
    case actionTypes.ADD_TO_HOST_FAIL:
      return addToHostFail(state, action);

    default:
      return state;
  }
};

export default reducer;
