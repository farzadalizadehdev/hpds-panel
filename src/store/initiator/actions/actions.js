import * as actionTypes from "../actions/types";
import api_url from "../../../api/api";
import axios from "../../../api/axios";

//fetch initiator

export const fetchInitiatorStart = () => {
  return {
    type: actionTypes.FETCH_INITIATOR_START,
  };
};

export const fetchInitiatorSuccess = (initiators) => {
  return {
    type: actionTypes.FETCH_INITIATOR_SUCCESS,
    initiators: initiators,
  };
};

export const fetchInitiatorFail = () => {
  return {
    type: actionTypes.FETCH_INITIATOR_FAIL,
  };
};

export const initFetchInitiator = () => {
  return {
    type: actionTypes.INIT_FETCH_INITIATORS
  };
};

//add to host initiator

export const addToHostStart = () => {
  return {
    type: actionTypes.ADD_TO_HOST_START,
  };
};

export const addToHostSuccess = () => {
  return {
    type: actionTypes.ADD_TO_HOST_SUCCESS,
  };
};

export const addToHostFail = () => {
  return {
    type: actionTypes.ADD_TO_HOST_FAIL,
  };
};

export const initAddToHost = (params) => {
  return (dispatch) => {
    dispatch(addToHostStart());

    const method = {
      method: "initiator.add-to-host",
      params: params,
    };

    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(addToHostSuccess());
          dispatch(initFetchInitiator());
        } else {
          dispatch(addToHostFail());
        }
      })
      .catch(() => {
        dispatch(addToHostFail());
      });
  };
};
