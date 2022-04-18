import * as actionType from "./actionTypes";
import api_url from "../../../api/api";
import axios from "../../../api/axios";

//fetch recipient
export const fetchRecipientStart = () => {
  return {
    type: actionType.FETCH_RECIPIENT_START,
  };
};

export const fetchRecipientSuccess = (recipient) => {
  return {
    type: actionType.FETCH_RECIPIENT_SUCCESS,
    recipient: recipient,
  };
};

export const fetchRecipientFail = () => {
  return {
    type: actionType.FETCH_RECIPIENT_FAIL,
  };
};

export const initFetchRecipient = () => {
  return (dispatch) => {
    dispatch(fetchRecipientStart());
    const method = {
      method: "smtp-recipients.show",
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(fetchRecipientSuccess(res.data.data));
        } else {
          dispatch(fetchRecipientFail());
        }
      })
      .catch(() => {
        dispatch(fetchRecipientFail());
      });
  };
};

//import recipient
export const importRecipientStart = () => {
  return {
    type: actionType.IMPORT_RECIPIENT_START,
  };
};

export const importRecipientSuccess = (response) => {
  return {
    type: actionType.IMPORT_RECIPIENT_SUCCESS,
    importRecipient: response,
  };
};

export const importRecipientFail = () => {
  return {
    type: actionType.IMPORT_RECIPIENT_FAIL,
  };
};

export const initImportRecipient = () => {
  return (dispatch) => {
    dispatch(importRecipientStart());

    const method = {
      method: "smtp-recipients.import",
    };

    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(importRecipientSuccess(res.data.data));
        } else {
          dispatch(importRecipientFail());
        }
      })
      .catch(() => {
        dispatch(importRecipientFail());
      });
  };
};

//create recipient
export const createRecipientStart = () => {
  return {
    type: actionType.CREATE_RECIPIENT_START,
  };
};

export const createRecipientSuccess = () => {
  return {
    type: actionType.CREATE_RECIPIENT_SUCCESS,
  };
};

export const createRecipientFail = () => {
  return {
    type: actionType.CREATE_RECIPIENT_FAIL,
  };
};

export const initCreateRecipient = (params) => {
  return (dispatch) => {
    dispatch(createRecipientStart());

    const method = {
      method: "smtp-recipients.add",
      params: params,
    };

    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(createRecipientSuccess());
          dispatch(initFetchRecipient());
        } else {
          dispatch(createRecipientFail());
        }
      })
      .catch(() => {
        dispatch(createRecipientFail());
      });
  };
};

//delete recipient
export const deleteRecipientStart = () => {
  return {
    type: actionType.DELETE_RECIPIENT_START,
  };
};

export const deleteRecipientSuccess = () => {
  return {
    type: actionType.DELETE_RECIPIENT_SUCCESS,
  };
};

export const deleteRecipientFail = () => {
  return {
    type: actionType.DELETE_RECIPIENT_FAIL,
  };
};

export const initDeleteRecipient = (recipientName) => {
  return (dispatch) => {
    dispatch(deleteRecipientStart());

    const params = {
      name: recipientName,
    };

    const method = {
      method: "smtp-recipients.delete",
      params,
    };

    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(deleteRecipientSuccess());
          dispatch(initFetchRecipient());
        } else {
          dispatch(deleteRecipientFail());
        }
      })
      .catch(() => {
        dispatch(deleteRecipientFail());
      });
  };
};

//edit recipient
export const editRecipientStart = () => {
  return {
    type: actionType.EDIT_RECIPIENT_START,
  };
};

export const editRecipientSuccess = () => {
  return {
    type: actionType.EDIT_RECIPIENT_SUCCESS,
  };
};

export const editRecipientFail = () => {
  return {
    type: actionType.EDIT_RECIPIENT_FAIL,
  };
};

export const initEditRecipient = (recipientName) => {
  return (dispatch) => {
    dispatch(editRecipientStart());

    const method = {
      method: "smtp-recipients.set",
      params: recipientName,
    };

    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(editRecipientSuccess());
          dispatch(initFetchRecipient());
        } else {
          dispatch(editRecipientFail());
        }
      })
      .catch(() => {
        dispatch(editRecipientFail());
      });
  };
};
