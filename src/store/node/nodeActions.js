import * as actionTypes from "./actionTypes";
import api_url from "../../api/api";
import axios from "../../api/axios";

//get node
export const getNodeStart = () => {
  return {
    type: actionTypes.GET_NODE_START,
  };
};

export const getNodeSuccess = (node) => {
  return {
    type: actionTypes.GET_NODE_SUCCESS,
    node: node,
  };
};

export const getNodeFail = () => {
  return {
    type: actionTypes.GET_NODE_FAIL,
  };
};

export const initgetNodes = () => {
  return (dispatch) => {
    const token = localStorage.getItem('token')
    if (token) {
      dispatch(getNodeStart());
      const method = {
        method: "system.nodes",
      };
      axios
        .post(api_url, method)
        .then((res) => {
          if (!res.data.error) {
            dispatch(getNodeSuccess(res.data.data));
          } else {
            dispatch(getNodeFail());
          }
        })
        .catch(() => {
          dispatch(getNodeFail());
        });
    }
  };
};
