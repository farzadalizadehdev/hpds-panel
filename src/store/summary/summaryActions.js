import * as actionTypes from "./actionTypes";
import api_url from "../../api/api";
import axios from "../../api/axios";

export const fetchSummaryStart = () => {
  return {
    type: actionTypes.FETCH_SUMMARY_START,
  };
};

export const fetchSummarySuccess = (summary) => {
  return {
    type: actionTypes.FETCH_SUMMARY_SUCCESS,
    summary: summary,
  };
};

export const fetchSummaryFail = () => {
  return {
    type: actionTypes.FETCH_SUMMARY_FAIL,
  };
};

export const initFetchSummary = () => {
  return (dispatch) => {
    dispatch(fetchSummaryStart());
    const params = {
      unit: "B",
    };
    const method = {
      method: "system.summary",
      params,
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(fetchSummarySuccess(res.data.data));
        } else {
          dispatch(fetchSummaryFail());
        }
      })
      .catch(() => {
        dispatch(fetchSummaryFail());
      });
  };
};
