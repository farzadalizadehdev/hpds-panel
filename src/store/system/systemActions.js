import * as actionTypes from "./actionTypes";
import api_url from "../../api/api";
import axios from "../../api/axios";
import { AUTH_LOGOUT } from "../auth/actionTypes";

//update system
export const updateSystemStart = () => {
  return {
    type: actionTypes.UPDATE_SYSTEM_START,
  };
};

export const updateSystemSuccess = () => {
  return {
    type: actionTypes.UPDATE_SYSTEM_SUCCESS,
  };
};

export const updateSystemFail = () => {
  return {
    type: actionTypes.UPDATE_SYSTEM_FAIL,
  };
};

export const initUpdateSystem = (url) => {
  return (dispatch) => {
    dispatch(updateSystemStart());

    const method = {
      method: "maintenance.update",
      params: url,
    };

    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(updateSystemSuccess());
          dispatch(logout());
        } else {
          dispatch(updateSystemFail());
        }
      })
      .catch(() => {
        dispatch(updateSystemFail());
      });
  };
};

//export system log
export const exportLogStart = () => {
  return {
    type: actionTypes.EXPORT_LOG_START,
  };
};

export const exportLogSuccess = (response) => {
  return {
    type: actionTypes.EXPORT_LOG_SUCCESS,
    export: response,
  };
};

export const exportLogFail = () => {
  return {
    type: actionTypes.EXPORT_LOG_FAIL,
  };
};

export const initExportLog = (params) => {
  return (dispatch) => {
    dispatch(exportLogStart());

    const method = {
      method: "log.export",
      params: params,
    };

    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(exportLogSuccess(res.data.data));
        } else {
          dispatch(exportLogFail());
        }
      })
      .catch(() => {
        dispatch(exportLogFail());
      });
  };
};

//check system status
export const checkStatusStart = () => {
  return {
    type: actionTypes.CHECK_STATUS_START,
  };
};

export const checkStatusSuccess = (response) => {
  return {
    type: actionTypes.CHECK_STATUS_SUCCESS,
    status: response,
  };
};

export const checkStatusFail = (response) => {
  return {
    type: actionTypes.CHECK_STATUS_FAIL,
    status: response,
  };
};

export const initCheckStatus = () => {
  return (dispatch) => {
    dispatch(checkStatusStart());

    const method = {
      method: "system.status",
    };

    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(checkStatusSuccess(res.data.data));
        } else {
          dispatch(checkStatusFail(res.data.data));
        }
      })
      .catch(() => {
        dispatch(checkStatusFail());
      });
  };
};

//reboot system
export const rebootSystemStart = () => {
  return {
    type: actionTypes.REBOOT_SYSTEM_START,
  };
};

export const rebootSystemSuccess = () => {
  return {
    type: actionTypes.REBOOT_SYSTEM_SUCCESS,
  };
};

export const rebootSystemFail = () => {
  return {
    type: actionTypes.REBOOT_SYSTEM_FAIL,
  };
};

export const initRebootSystem = (params) => {
  return (dispatch) => {
    dispatch(rebootSystemStart());

    const method = {
      method: "system.reboot",
      params: params,
    };

    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(rebootSystemSuccess());
        } else {
          dispatch(rebootSystemFail());
        }
      })
      .catch(() => {
        dispatch(rebootSystemFail());
      });
  };
};

//shutdown system
export const shutdownSystemStart = () => {
  return {
    type: actionTypes.SHUTDOWN_SYSTEM_START,
  };
};

export const shutdownSystemSuccess = () => {
  return {
    type: actionTypes.SHUTDOWN_SYSTEM_SUCCESS,
  };
};

export const shutdownSystemFail = () => {
  return {
    type: actionTypes.SHUTDOWN_SYSTEM_FAIL,
  };
};

export const initShutdownSystem = (params) => {
  return (dispatch) => {
    dispatch(shutdownSystemStart());

    const method = {
      method: "system.shutdown",
      params: params,
    };

    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(shutdownSystemSuccess());
        } else {
          dispatch(shutdownSystemFail());
        }
      })
      .catch(() => {
        dispatch(shutdownSystemFail());
      });
  };
};

//logout
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  localStorage.removeItem("exprationDate");
  localStorage.removeItem('sabOs');
  return {
    type: AUTH_LOGOUT,
  };
};
