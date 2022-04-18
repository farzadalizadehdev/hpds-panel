import * as actionTypes from "./actionTypes";
import api_url from "../../api/api";
import axios from "../../api/axios";

//fetch rapidstore

export const fetchRapidstoreStart = () => {
  return {
    type: actionTypes.FETCH_RAPIDSTORE_START,
  };
};

export const fetchRapidstoreSuccess = (rapidstore) => {
  return {
    type: actionTypes.FETCH_RAPIDSTORE_SUCCESS,
    rapidstore: rapidstore,
  };
};

export const fetchRapidstoreFail = () => {
  return {
    type: actionTypes.FETCH_RAPIDSTORE_FAIL,
  };
};

export const initFetchRapidstore = () => {
  return (dispatch) => {
    dispatch(fetchRapidstoreStart());
    const method = {
      method: "rapidstore.show",
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(fetchRapidstoreSuccess(res.data.data));
        } else {
          dispatch(fetchRapidstoreFail());
        }
      })
      .catch(() => {
        dispatch(fetchRapidstoreFail());
      });
  };
};

//fetch rapidstore status

export const fetchRapidstoreStatusStart = () => {
  return {
    type: actionTypes.FETCH_RAPIDSTORE_STATUS_START,
  };
};

export const fetchRapidstoreStatusSuccess = (status) => {
  return {
    type: actionTypes.FETCH_RAPIDSTORE_STATUS_SUCCESS,
    status: status,
  };
};

export const fetchRapidstoreStatusFail = () => {
  return {
    type: actionTypes.FETCH_RAPIDSTORE_STATUS_FAIL,
  };
};

export const initFetchRapidstoreStatus = () => {
  return (dispatch) => {
    dispatch(fetchRapidstoreStatusStart());
    const method = {
      method: "rapidstore.status",
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(fetchRapidstoreStatusSuccess(res.data.data));
        } else {
          dispatch(fetchRapidstoreStatusFail());
        }
      })
      .catch(() => {
        dispatch(fetchRapidstoreStatusFail());
      });
  };
};

//delete rapidstore

export const deleteRapidstoreStart = () => {
  return {
    type: actionTypes.DELETE_RAPIDSTORE_START,
  };
};

export const deleteRapidstoreSuccess = () => {
  return {
    type: actionTypes.DELETE_RAPIDSTORE_SUCCESS,
  };
};

export const deleteRapidstoreFail = () => {
  return {
    type: actionTypes.DELETE_RAPIDSTORE_FAIL,
  };
};

export const initDeleteRapidstore = (rapidstoreName) => {
  return (dispatch) => {
    dispatch(deleteRapidstoreStart());
    const params = {
      lun: rapidstoreName,
    };
    const method = {
      method: "rapidstore.delete",
      params,
    };

    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(deleteRapidstoreSuccess());
          dispatch(initFetchRapidstore());
          dispatch(initFetchRapidstoreStatus());
        } else {
          dispatch(deleteRapidstoreFail());
        }
      })
      .catch(() => {
        dispatch(deleteRapidstoreFail());
      });
  };
};

//create rapidstore

export const createRapidstoreStart = () => {
  return {
    type: actionTypes.CREATE_RAPIDSTORE_START,
  };
};

export const createRapidstoreSuccess = () => {
  return {
    type: actionTypes.CREATE_RAPIDSTORE_SUCCESS,
  };
};

export const createRapidstoreFail = () => {
  return {
    type: actionTypes.CREATE_RAPIDSTORE_FAIL,
  };
};

export const initCreateRapidstore = (params) => {
  return (dispatch) => {
    dispatch(createRapidstoreStart());

    const method = {
      method: "rapidstore.create",
      params: params,
    };

    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(createRapidstoreSuccess());
          dispatch(initFetchRapidstore());
          dispatch(initFetchRapidstoreStatus());
        } else {
          dispatch(createRapidstoreFail());
        }
      })
      .catch(() => {
        dispatch(createRapidstoreFail());
      });
  };
};
