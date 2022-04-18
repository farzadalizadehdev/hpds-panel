import { updateObject } from "../../utility/Utility";
import * as actionType from "./actionTypes";

const initialState = {
  network: null,
  loading: false,
  error: false,
  loadingUpdateNetwork: false,
  operationLoading: false,
};

//fetch network
const fetchNetworkStart = (state) => {
  return updateObject(state, {
    loading: true,
    error: false,
  });
};

const fetchNetworkSuccess = (state, action) => {
  return updateObject(state, {
    network: action.network,
    loading: false,
    error: false,
  });
};

const fetchNetworkFail = (state) => {
  return updateObject(state, {
    loading: false,
    error: true,
  });
};

//update network

const setNetworkStart = (state) => {
  return updateObject(state, {
    loadingUpdateNetwork: true,
    operationLoading: true,
    error: false,
  });
};

const setNetworkSuccess = (state) => {
  return updateObject(state, {
    loadingUpdateNetwork: false,
    operationLoading: false,
    error: false,
  });
};

const setNetworkFail = (state) => {
  return updateObject(state, {
    loadingUpdateNetwork: false,
    operationLoading: false,
    error: true,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //fetch network
    case actionType.FETCH_NETWORK_START:
      return fetchNetworkStart(state, action);
    case actionType.FETCH_NETWORK_SUCCESS:
      return fetchNetworkSuccess(state, action);
    case actionType.FETCH_NETWORK_FAIL:
      return fetchNetworkFail(state, action);
    //update network
    case actionType.SET_NETWORK_START:
      return setNetworkStart(state, action);
    case actionType.SET_NETWORK_SUCCESS:
      return setNetworkSuccess(state, action);
    case actionType.SET_NETWORK_FAIL:
      return setNetworkFail(state, action);
    default:
      return state;
  }
};

export default reducer;
