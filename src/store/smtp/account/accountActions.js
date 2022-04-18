import * as actionType from "./actionTypes";
import api_url from "../../../api/api";
import axios from "../../../api/axios";

//fetch account
export const fetchAccountStart = () => {
  return {
    type: actionType.FETCH_ACCOUNT_START,
  };
};

export const fetchAccountSuccess = (account) => {
  return {
    type: actionType.FETCH_ACCOUNT_SUCCESS,
    account: account,
  };
};

export const fetchAccountFail = () => {
  return {
    type: actionType.FETCH_ACCOUNT_FAIL,
  };
};

export const initFetchAccount = () => {
  return (dispatch) => {
    dispatch(fetchAccountStart());
    const method = {
      method: "smtp-account.show",
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(fetchAccountSuccess(res.data.data));
        } else {
          dispatch(fetchAccountFail());
        }
      })
      .catch(() => {
        dispatch(fetchAccountFail());
      });
  };
};

//update account
export const updateAccountStart = () => {
  return {
    type: actionType.UPDATE_ACCOUNT_START,
  };
};

export const updateAccountSuccess = () => {
  return {
    type: actionType.UPDATE_ACCOUNT_SUCCESS,
  };
};

export const updateAccountFail = () => {
  return {
    type: actionType.UPDATE_ACCOUNT_FAIL,
  };
};

export const initUpdateAccount = (params) => {
  return (dispatch) => {
    dispatch(updateAccountStart());
    const method = {
      method: "smtp-account.set",
      params: params,
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(updateAccountSuccess());
          dispatch(initFetchAccount());
        } else {
          dispatch(updateAccountFail());
        }
      })
      .catch(() => {
        dispatch(updateAccountFail());
      });
  };
};

//export account
export const exportAccountStart = () => {
  return {
    type: actionType.EXPORT_ACCOUNT_START,
  };
};

export const exportAccountSuccess = (response) => {
  return {
    type: actionType.EXPORT_ACCOUNT_SUCCESS,
    exportAccount: response,
  };
};

export const exportAccountFail = () => {
  return {
    type: actionType.EXPORT_ACCOUNT_FAIL,
  };
};

export const initExportAccount = () => {
  return (dispatch) => {
    dispatch(exportAccountStart());

    const method = {
      method: "smtp-account.export",
    };

    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(exportAccountSuccess(res.data.data));
        } else {
          dispatch(exportAccountFail());
        }
      })
      .catch(() => {
        dispatch(exportAccountFail());
      });
  };
};

//verify account
export const verifyAccountStart = () => {
  return {
    type: actionType.VERIFY_ACCOUNT_START,
  };
};

export const verifyAccountSuccess = (response) => {
  return {
    type: actionType.VERIFY_ACCOUNT_SUCCESS,
    verifyAccount: response,
  };
};

export const verifyAccountFail = () => {
  return {
    type: actionType.VERIFY_ACCOUNT_FAIL,
  };
};

export const initVerifyAccount = () => {
  return (dispatch) => {
    dispatch(verifyAccountStart());

    const method = {
      method: "smtp-account.test",
    };

    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(verifyAccountSuccess(res.data.data));
        } else {
          dispatch(verifyAccountFail());
        }
      })
      .catch(() => {
        dispatch(verifyAccountFail());
      });
  };
};

//import account
export const importAccountStart = () => {
  return {
    type: actionType.IMPORT_ACCOUNT_START,
  };
};

export const importAccountSuccess = (response) => {
  return {
    type: actionType.IMPORT_ACCOUNT_SUCCESS,
    importAccount: response,
  };
};

export const importAccountFail = () => {
  return {
    type: actionType.IMPORT_ACCOUNT_FAIL,
  };
};

export const initImportAccount = () => {
  return (dispatch) => {
    dispatch(importAccountStart());

    const method = {
      method: "smtp-account.import",
    };

    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(importAccountSuccess(res.data.data));
        } else {
          dispatch(importAccountFail());
        }
      })
      .catch(() => {
        dispatch(importAccountFail());
      });
  };
};
