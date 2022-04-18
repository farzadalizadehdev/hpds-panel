import * as actionType from "./actionTypes";
import api_url from "../../api/api";
import axios from "../../api/axios";

//fetchNetworkFail dns
export const fetchNetworkStart = () => {
  return {
    type: actionType.FETCH_NETWORK_START,
  };
};

export const fetchNetworkSuccess = (network) => {
  return {
    type: actionType.FETCH_NETWORK_SUCCESS,
    network: network,
  };
};

export const fetchNetworkFail = () => {
  return {
    type: actionType.FETCH_NETWORK_FAIL,
  };
};

export const initFetchNetwork = () => {
  return (dispatch) => {
    dispatch(fetchNetworkStart());
    const method = {
      method: "network.show",
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(fetchNetworkSuccess(res.data.data));
        } else {
          dispatch(fetchNetworkFail());
        }
      })
      .catch(() => {
        dispatch(fetchNetworkFail());
      });
  };
};

//set network

export const setNetworkStart = () => {
  return {
    type: actionType.SET_NETWORK_START,
  };
};

export const setNetworkSuccess = () => {
  return {
    type: actionType.SET_NETWORK_SUCCESS,
  };
};

export const setNetworkFail = () => {
  return {
    type: actionType.SET_NETWORK_FAIL,
  };
};

export const initSetNetwork = (params) => {
  return (dispatch) => {
    dispatch(setNetworkStart());
    const method = {
      method: "network.set",
      params: params,
    };

    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(setNetworkSuccess());
          dispatch(initFetchNetwork());
        } else {
          dispatch(setNetworkFail());
        }
      })
      .catch(() => {
        dispatch(setNetworkFail());
      });
  };
};
