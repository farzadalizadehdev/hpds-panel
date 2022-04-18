import * as actionTypes from "./actionTypes";
import api_url from "../../api/api";
import axios from "../../api/axios";

//fetch snap shot

export const fetchSnapShotStart = () => {
  return {
    type: actionTypes.FETCH_SNAPSHOT_START,
  };
};

export const fetchSnapShotSuccess = (snapShot) => {
  return {
    type: actionTypes.FETCH_SNAPSHOT_SUCCESS,
    snapShot: snapShot,
  };
};

export const fetchSnapShotFail = () => {
  return {
    type: actionTypes.FETCH_SNAPSHOT_FAIL,
  };
};

export const initFetchSnapShot = () => {
  return (dispatch) => {
    dispatch(fetchSnapShotStart());

    const method = {
      method: "snapshot.show",
    };

    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(fetchSnapShotSuccess(res.data.data));
        } else {
          dispatch(fetchSnapShotFail());
        }
      })
      .catch(() => {
        dispatch(fetchSnapShotFail());
      });
  };
};

//create snap shot

export const createSnapShotStart = () => {
  return {
    type: actionTypes.CREATE_SNAPSHOT_START,
  };
};

export const createSnapShotSuccess = () => {
  return {
    type: actionTypes.CREATE_SNAPSHOT_SUCCESS,
  };
};

export const createSnapShotFail = () => {
  return {
    type: actionTypes.CREATE_SNAPSHOT_FAIL,
  };
};

export const initCreateSnapShot = (params) => {
  return (dispatch) => {
    dispatch(createSnapShotStart());

    const method = {
      method: "snapshot.create",
      params: params,
    };

    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(createSnapShotSuccess());
          dispatch(initFetchSnapShot());
        } else {
          dispatch(createSnapShotFail());
        }
      })
      .catch(() => {
        dispatch(createSnapShotFail());
      });
  };
};

//extend snap shot

export const extendSnapShotStart = () => {
  return {
    type: actionTypes.EXTEND_SNAPSHOT_START,
  };
};

export const extendSnapShotSuccess = () => {
  return {
    type: actionTypes.EXTEND_SNAPSHOT_SUCCESS,
  };
};

export const extendSnapShotFail = () => {
  return {
    type: actionTypes.EXTEND_SNAPSHOT_FAIL,
  };
};

export const initExtendSnapShot = (params) => {
  return (dispatch) => {
    dispatch(extendSnapShotStart());

    const method = {
      method: "snapshot.extend",
      params: params,
    };

    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(extendSnapShotSuccess());
          dispatch(initFetchSnapShot());
        } else {
          dispatch(extendSnapShotFail());
        }
      })
      .catch(() => {
        dispatch(extendSnapShotFail());
      });
  };
};

//delete snap shot

export const deleteSnapShotStart = () => {
  return {
    type: actionTypes.DELETE_SNAPSHOT_START,
  };
};

export const deleteSnapShotSuccess = () => {
  return {
    type: actionTypes.DELETE_SNAPSHOT_SUCCESS,
  };
};

export const deleteSnapShotFail = () => {
  return {
    type: actionTypes.DELETE_SNAPSHOT_FAIL,
  };
};

export const initDeleteSnapShot = (snapShotName) => {
  return (dispatch) => {
    dispatch(deleteSnapShotStart());

    const params = {
      name: snapShotName,
    };

    const method = {
      method: "snapshot.delete",
      params,
    };

    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(deleteSnapShotSuccess());
          dispatch(initFetchSnapShot());
        } else {
          dispatch(deleteSnapShotFail());
        }
      })
      .catch(() => {
        dispatch(deleteSnapShotFail());
      });
  };
};

//delete snap shot

export const restoreSnapShotStart = () => {
  return {
    type: actionTypes.RESTORE_SNAPSHOT_START,
  };
};

export const restoreSnapShotSuccess = () => {
  return {
    type: actionTypes.RESTORE_SNAPSHOT_SUCCESS,
  };
};

export const restoreSnapShotFail = () => {
  return {
    type: actionTypes.RESTORE_SNAPSHOT_FAIL,
  };
};

export const initRestoreSnapShot = (snapShotName) => {
  return (dispatch) => {
    dispatch(restoreSnapShotStart());

    const params = {
      name: snapShotName,
    };

    const method = {
      method: "snapshot.restore",
      params,
    };

    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(restoreSnapShotSuccess());
          dispatch(initFetchSnapShot());
        } else {
          dispatch(restoreSnapShotFail());
        }
      })
      .catch(() => {
        dispatch(restoreSnapShotFail());
      });
  };
};
