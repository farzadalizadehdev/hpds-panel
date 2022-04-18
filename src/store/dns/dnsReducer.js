import { updateObject } from "../../utility/Utility";
import * as actionType from "./actionTypes";

const initialState = {
  dns: null,
  loading: false,
  error: false,
  loadingUpdateDns: false,
  operationLoading: false,
};

//fetch dns
const fetchDnsStart = (state) => {
  return updateObject(state, {
    loading: true,
    error: false,
  });
};

const fetchDnsSuccess = (state, action) => {
  return updateObject(state, {
    dns: action.dns,
    loading: false,
    error: false,
  });
};

const fetchDnsFail = (state) => {
  return updateObject(state, {
    loading: false,
  });
};

//update dns

const updateDnsStart = (state) => {
  return updateObject(state, {
    loadingUpdateDns: true,
    operationLoading: true,
    error: false,
  });
};

const updateDnsSuccess = (state) => {
  return updateObject(state, {
    loadingUpdateDns: false,
    operationLoading: false,
    error: false,
  });
};

const updateDnsFail = (state) => {
  return updateObject(state, {
    loadingUpdateDns: false,
    operationLoading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //fetch dns
    case actionType.FETCH_DNS_START:
      return fetchDnsStart(state, action);
    case actionType.FETCH_DNS_SUCCESS:
      return fetchDnsSuccess(state, action);
    case actionType.FETCH_DNS_FAIL:
      return fetchDnsFail(state, action);
    //update dns
    case actionType.UPDATE_DNS_START:
      return updateDnsStart(state, action);
    case actionType.UPDATE_DNS_SUCCESS:
      return updateDnsSuccess(state, action);
    case actionType.UPDATE_DNS_FAIL:
      return updateDnsFail(state, action);
    default:
      return state;
  }
};

export default reducer;
