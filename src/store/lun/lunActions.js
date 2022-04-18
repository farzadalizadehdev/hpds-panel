import * as actionTypes from "./actionTypes";
import api_url from "../../api/api";
import axios from "../../api/axios";
import * as actions from "../store"

//fetch lun

export const fetchLunStart = () => {
  return {
    type: actionTypes.FETCH_LUN_START,
  };
};

export const fetchLunSuccess = (luns) => {
  return {
    type: actionTypes.FETCH_LUN_SUCCESS,
    luns: luns,
  };
};

export const fetchLunFail = () => {
  return {
    type: actionTypes.FETCH_LUN_FAIL,
  };
};

export const initFetchLun = () => {
  return (dispatch) => {
    dispatch(fetchLunStart());
    const method = {
      method: "lun.show",
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(fetchLunSuccess(res.data.data));
        } else {
          dispatch(fetchLunFail());
        }
      })
      .catch(() => {
        dispatch(fetchLunFail());
      });
  };
};

//delete lun

export const deleteLunStart = () => {
  return {
    type: actionTypes.DELETE_LUN_START,
  };
};

export const deleteLunSuccess = () => {
  return {
    type: actionTypes.DELETE_LUN_SUCCESS,
  };
};

export const deleteLunFail = () => {
  return {
    type: actionTypes.DELETE_LUN_FAIL,
  };
};

export const initDeleteLun = (lunName) => {
  return (dispatch) => {
    dispatch(deleteLunStart());
    const params = {
      name: lunName,
    };
    const method = {
      method: "lun.delete",
      params,
    };

    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(deleteLunSuccess());
          dispatch(initFetchLun());
          dispatch(actions.initFetchPools());
        } else {
          dispatch(deleteLunFail());
        }
      })
      .catch(() => {
        dispatch(deleteLunFail());
      });
  };
};

//extend lun

export const extendLunStart = () => {
  return {
    type: actionTypes.EXTEND_LUN_START,
  };
};

export const extendLunSuccess = () => {
  return {
    type: actionTypes.EXTEND_LUN_SUCCESS,
  };
};

export const extendLunFail = () => {
  return {
    type: actionTypes.EXTEND_LUN_FAIL,
  };
};

export const initExtendLun = (params) => {
  return (dispatch) => {
    dispatch(extendLunStart());
    const method = {
      method: "lun.extend",
      params: params,
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(extendLunSuccess());
          dispatch(initFetchLun());
          dispatch(actions.initFetchPools());
        } else {
          dispatch(extendLunFail());
        }
      })
      .catch(() => {
        dispatch(extendLunFail());
      });
  };
};

//create lun

export const createLunStart = () => {
  return {
    type: actionTypes.CREATE_LUN_START,
  };
};

export const createLunSuccess = () => {
  return {
    type: actionTypes.CREATE_LUN_SUCCESS,
  };
};

export const createLunFail = () => {
  return {
    type: actionTypes.CREATE_LUN_FAIL,
  };
};

export const initCreateLun = (params) => {
  return (dispatch) => {
    dispatch(createLunStart());
    const method = {
      method: "lun.create",
      params: params,
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(createLunSuccess());
          dispatch(initFetchLun());
          dispatch(actions.initFetchPools());
        } else {
          dispatch(createLunFail());
        }
      })
      .catch(() => {
        dispatch(createLunFail());
      });
  };
};

//add to acc

export const addToAccStart = () => {
  return {
    type: actionTypes.ADD_TO_ACC_START,
  };
};

export const addToAccSuccess = () => {
  return {
    type: actionTypes.ADD_TO_ACC_SUCCESS,
  };
};

export const addToAccFail = () => {
  return {
    type: actionTypes.ADD_TO_ACC_FAIL,
  };
};

export const initAddToAcc = (params) => {
  return (dispatch) => {
    dispatch(addToAccStart());
    const method = {
      method: "lun.add-to-acc",
      params: params,
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(addToAccSuccess(res.data));
          dispatch(initFetchLun());
        } else {
          dispatch(addToAccFail());
        }
      })
      .catch(() => {
        dispatch(addToAccFail());
      });
  };
};

// rename lun

export const renameLunStart = () => {
  return {
    type: actionTypes.RENAME_LUN_START,
  };
};

export const renameLunSuccess = () => {
  return {
    type: actionTypes.RENAME_LUN_SUCCESS,
  };
};

export const renameLunFail = () => {
  return {
    type: actionTypes.RENAME_LUN_FAIL,
  };
};

export const initRenameLun = (params) => {
  return (dispatch) => {
    dispatch(renameLunStart());
    const method = {
      method: "lun.set",
      params: params,
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(renameLunSuccess());
          dispatch(initFetchLun());
        } else {
          dispatch(renameLunFail());
        }
      })
      .catch(() => {
        dispatch(renameLunFail());
      });
  };
};
