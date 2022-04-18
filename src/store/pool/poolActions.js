import * as actionTypes from "./actionTypes";
import api_url from "../../api/api";
import axios from "../../api/axios";
import * as actions from "../store";

//fetch pool

export const fetchPoolStart = () => {
  return {
    type: actionTypes.FETCH_POOLS_START,
  };
};

export const fetchPoolSuccess = (pools) => {
  return {
    type: actionTypes.FETCH_POOLS_SUCCESS,
    pools: pools,
  };
};

export const fetchPoolFail = () => {
  return {
    type: actionTypes.FETCH_POOLS_FAIL,
  };
};

export const initFetchPools = () => {
  return (dispatch) => {
    dispatch(fetchPoolStart());
    const params = {
      details: true,
    };
    const method = {
      method: "pool.show",
      params,
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(fetchPoolSuccess(res.data.data));
        } else {
          dispatch(fetchPoolFail());
        }
      })
      .catch(() => {
        dispatch(fetchPoolFail());
      });
  };
};

//delete pools

export const deletePoolStart = () => {
  return {
    type: actionTypes.DELETE_POOLS_START,
  };
};

export const deletePoolSuccess = () => {
  return {
    type: actionTypes.DELETE_POOLS_SUCCESS,
  };
};

export const deletePoolFail = () => {
  return {
    type: actionTypes.DELETE_POOLS_FAIL,
  };
};

export const initDeletePools = (poolName) => {
  return (dispatch) => {
    dispatch(deletePoolStart());
    const params = {
      name: poolName,
    };
    const method = {
      method: "pool.delete",
      params,
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(deletePoolSuccess());
          dispatch(initFetchPools());
          dispatch(actions.initFetchDisk());
        } else {
          dispatch(deletePoolFail());
        }
      })
      .catch(() => {
        dispatch(deletePoolFail());
      });
  };
};

//extend pools

export const extendPoolStart = () => {
  return {
    type: actionTypes.EXTEND_POOLS_START,
  };
};

export const extendPoolSuccess = () => {
  return {
    type: actionTypes.EXTEND_POOLS_SUCCESS,
  };
};

export const extendPoolFail = () => {
  return {
    type: actionTypes.EXTEND_POOLS_FAIL,
  };
};

export const initExtendPools = (params) => {
  return (dispatch) => {
    dispatch(extendPoolStart());
    const method = {
      method: "pool.extend",
      params: params
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(extendPoolSuccess());
          dispatch(initFetchPools());
          dispatch(actions.initFetchDisk());
        } else {
          dispatch(extendPoolFail());
        }
      })
      .catch(() => {
        dispatch(extendPoolFail());
      });
  };
};

//create thin pool

export const createPoolStart = () => {
  return {
    type: actionTypes.CREATE_POOL_START,
  };
};

export const createPoolSuccess = () => {
  return {
    type: actionTypes.CREATE_POOL_SUCCESS,
  };
};

export const createPoolFail = () => {
  return {
    type: actionTypes.CREATE_POOL_FAIL,
  };
};

export const initCreatePool = (params) => {
  return (dispatch) => {
    dispatch(createPoolStart());
    const method = {
      method: "pool.create",
      params: params,
    };

    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(createPoolSuccess());
          dispatch(initFetchPools());
          dispatch(actions.initFetchDisk());
        } else {
          dispatch(createPoolFail());
        }
      })
      .catch(() => {
        dispatch(createPoolFail());
      });
  };
};

// rename pool

export const renamePoolstart = () => {
  return {
    type: actionTypes.RENAME_POOL_START,
  };
};

export const renamePoolSuccess = () => {
  return {
    type: actionTypes.RENAME_POOL_SUCCESS,
  };
};

export const renamePoolfail = () => {
  return {
    type: actionTypes.RENAME_POOL_FAIL,
  }
}


export const initRenamePool = (params) => {
  return (dispatch) => {
    dispatch(renamePoolstart());
    const method = {
      method: "pool.set",
      params: params
    };
    axios.post(api_url, method).then((res) => {
      if (!res.data.error) {
        dispatch(renamePoolSuccess());
        dispatch(initFetchPools());
        dispatch(actions.initFetchDisk());
      } else {
        dispatch(renamePoolfail());
      }
    })
      .catch(() => {
        dispatch(renamePoolfail())
      })
  }
}
