import * as actionTypes from "./actionTypes";
import api_url from "../../api/api";
import axios from "../../api/axios";

//fetch events
export const fetchQueueStart = () => {
  return {
    type: actionTypes.FETCH_QUEUE_START,
  };
};

export const fetchQueueSuccess = (events) => {
  return {
    type: actionTypes.FETCH_QUEUE_SUCCESS,
    events: events,
  };
};

export const fetchQueueFail = () => {
  return {
    type: actionTypes.FETCH_QUEUE_FAIL,
  };
};

export const initFetchQueue = () => {
  return (dispatch) => {
    dispatch(fetchQueueStart());
    const method = {
      method: "queue.show",
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(fetchQueueSuccess(res.data.data));
        } else {
          dispatch(fetchQueueFail());
        }
      })
      .catch(() => {
        dispatch(fetchQueueFail());
      });
  };
};
