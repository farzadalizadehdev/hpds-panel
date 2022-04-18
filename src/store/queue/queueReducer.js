import { updateObject } from "../../utility/Utility";
import * as actionTypes from "./actionTypes";

const initialState = {
  queue: null,
  loading: false,
  error: false,
};

//fetch queue
const fetchQueueStart = (state, action) => {
  return updateObject(state, {
    loading: true,
    error: false,
  });
};

const fetchQueueSuccess = (state, action) => {
  return updateObject(state, {
    queue: action.queue,
    loading: false,
    error: false,
  });
};

const fetchQueueFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: true,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //fetch queue
    case actionTypes.FETCH_QUEUE_START:
      return fetchQueueStart(state, action);
    case actionTypes.FETCH_QUEUE_SUCCESS:
      return fetchQueueSuccess(state, action);
    case actionTypes.FETCH_QUEUE_FAIL:
      return fetchQueueFail(state, action);
    default:
      return state;
  }
};

export default reducer;
