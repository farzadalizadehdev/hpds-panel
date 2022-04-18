import * as actionType from "./actionTypes";
import api_url from "../../api/api";
import axios from "../../api/axios";

//fetch dns
export const fetchDnsStart = () => {
  return {
    type: actionType.FETCH_DNS_START,
  };
};

export const fetchDnsSuccess = (dns) => {
  return {
    type: actionType.FETCH_DNS_SUCCESS,
    dns: dns,
  };
};

export const fetchDnsFail = () => {
  return {
    type: actionType.FETCH_DNS_FAIL,
  };
};

export const initFetchDns = () => {
  return (dispatch) => {
    dispatch(fetchDnsStart());
    const method = {
      method: "dns.show",
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(fetchDnsSuccess(res.data.data));
        } else {
          dispatch(fetchDnsFail());
        }
      })
      .catch(() => {
        dispatch(fetchDnsFail());
      });
  };
};

//update dns

export const updateDnsStart = () => {
  return {
    type: actionType.UPDATE_DNS_START,
  };
};

export const updateDnsSuccess = () => {
  return {
    type: actionType.UPDATE_DNS_SUCCESS,
  };
};

export const updateDnsFail = () => {
  return {
    type: actionType.UPDATE_DNS_FAIL,
  };
};

export const initUpdateDns = (reqMethod, nameServer) => {
  return (dispatch) => {
    dispatch(updateDnsStart());
    const method = {
      method: reqMethod,
      params: {
        nameserver: nameServer,
      },
    };

    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(updateDnsSuccess());
          dispatch(initFetchDns());
        } else {
          dispatch(updateDnsFail());
        }
      })
      .catch(() => {
        dispatch(updateDnsFail());
      });
  };
};
