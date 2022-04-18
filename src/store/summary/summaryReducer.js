import { updateObject } from "../../utility/Utility";
import * as actionTypes from "./actionTypes";

const initialState = {
  summary: null,
  loading: false,
  error: false,
  serverTime: null,
};

const fetchSummaryStart = (state) => {
  return updateObject(state, {
    loading: true,
    error: false,
  });
};

const fetchSummarySuccess = (state, action) => {
  return updateObject(state, {
    summary: action.summary,
    loading: false,
    error: false,
  });
};

const fetchSummaryFail = (state) => {
  return updateObject(state, {
    error: true,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SUMMARY_START:
      return fetchSummaryStart(state, action);
    case actionTypes.FETCH_SUMMARY_SUCCESS:
      return fetchSummarySuccess(state, action);
    case actionTypes.FETCH_SUMMARY_FAIL:
      return fetchSummaryFail(state, action);
    default:
      return state;
  }
};

export default reducer;
