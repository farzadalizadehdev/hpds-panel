import * as actionTypes from "./actionTypes";
import api_url from "../../api/api";
import axios from "../../api/axios";

//fetch events
export const fetchEventStart = () => {
  return {
    type: actionTypes.FETCH_EVENTS_START,
  };
};

export const fetchEventSuccess = (events) => {
  return {
    type: actionTypes.FETCH_EVENTS_SUCCESS,
    events: events,
  };
};

export const fetchEventFail = () => {
  return {
    type: actionTypes.FETCH_EVENTS_FAIL,
  };
};

export const initFetchEvents = () => {
  return (dispatch) => {
    dispatch(fetchEventStart());
    const method = {
      method: "event.show",
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(fetchEventSuccess(res.data.data));
        } else {
          dispatch(fetchEventFail());
        }
      })
      .catch(() => {
        dispatch(fetchEventFail());
      });
  };
};

//export events
export const exportEventStart = () => {
  return {
    type: actionTypes.EXPORT_EVENTS_START,
  };
};

export const exportEventSuccess = (response) => {
  return {
    type: actionTypes.EXPORT_EVENTS_SUCCESS,
    exportEvents: response,
  };
};

export const exportEventFail = () => {
  return {
    type: actionTypes.EXPORT_EVENTS_FAIL,
  };
};

export const initExportEvents = () => {
  return (dispatch) => {
    dispatch(exportEventStart());
    const method = {
      method: "event.export",
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(exportEventSuccess(res.data.data));
        } else {
          dispatch(exportEventFail());
        }
      })
      .catch(() => {
        dispatch(exportEventFail());
      });
  };
};

//clear events
export const clearEventStart = () => {
  return {
    type: actionTypes.CLEAR_EVENTS_START,
  };
};

export const clearEventSuccess = (events) => {
  return {
    type: actionTypes.CLEAR_EVENTS_SUCCESS,
    events: events,
  };
};

export const clearEventFail = () => {
  return {
    type: actionTypes.CLEAR_EVENTS_FAIL,
  };
};

export const initClearEvents = () => {
  return (dispatch) => {
    dispatch(clearEventStart());
    const method = {
      method: "event.clear",
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(clearEventSuccess(res.data.data));
          dispatch(initFetchEvents());
        } else {
          dispatch(clearEventFail());
        }
      })
      .catch(() => {
        dispatch(clearEventFail());
      });
  };
};
