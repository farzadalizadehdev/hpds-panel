import { updateObject } from "../../utility/Utility";
import * as actionTypes from "./actionTypes";

const initialState = {
  events: null,
  loading: false,
  error: false,
  loadingExport: false,
  exportEvents: null,
  loadingClear: false,
  operationLoading: false,
};

//fetch events
const fetchEventStart = (state, action) => {
  return updateObject(state, {
    loading: true,
    error: false,
  });
};

const fetchEventSuccess = (state, action) => {
  return updateObject(state, {
    events: action.events,
    loading: false,
    error: false,
  });
};

const fetchEventFail = (state) => {
  return updateObject(state, {
    loading: false,
  });
};

//export events
const exportEventStart = (state) => {
  return updateObject(state, {
    operationLoading: true,
    loadingExport: true,
    error: false,
  });
};

const exportEventSuccess = (state, action) => {
  return updateObject(state, {
    exportEvents: action.exportEvents,
    loadingExport: false,
    operationLoading: false,
    error: false,
  });
};

const exportEventFail = (state) => {
  return updateObject(state, {
    loadingExport: false,
    operationLoading: false,
  });
};

//clear events
const clearEventStart = (state) => {
  return updateObject(state, {
    loadingClear: true,
    operationLoading: true,
    error: false,
  });
};

const clearEventSuccess = (state) => {
  return updateObject(state, {
    loadingClear: false,
    operationLoading: false,
    error: false,
  });
};

const clearEventFail = (state) => {
  return updateObject(state, {
    loadingClear: false,
    operationLoading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //fetch events
    case actionTypes.FETCH_EVENTS_START:
      return fetchEventStart(state, action);
    case actionTypes.FETCH_EVENTS_SUCCESS:
      return fetchEventSuccess(state, action);
    case actionTypes.FETCH_EVENTS_FAIL:
      return fetchEventFail(state, action);
    //export events
    case actionTypes.EXPORT_EVENTS_START:
      return exportEventStart(state, action);
    case actionTypes.EXPORT_EVENTS_SUCCESS:
      return exportEventSuccess(state, action);
    case actionTypes.EXPORT_EVENTS_FAIL:
      return exportEventFail(state, action);
    //clear events
    case actionTypes.CLEAR_EVENTS_START:
      return clearEventStart(state, action);
    case actionTypes.CLEAR_EVENTS_SUCCESS:
      return clearEventSuccess(state, action);
    case actionTypes.CLEAR_EVENTS_FAIL:
      return clearEventFail(state, action);
    default:
      return state;
  }
};

export default reducer;
