import * as actionTypes from "./actionTypes";
import api_url from "../../api/api";
import axios from "../../api/axios";

//fetch user
export const fetchUserStart = () => {
  return {
    type: actionTypes.FETCH_USERS_START,
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: actionTypes.FETCH_USERS_SUCCESS,
    users: users,
  };
};

export const fetchUserFail = () => {
  return {
    type: actionTypes.FETCH_USERS_FAIL,
  };
};

export const initFetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserStart());

    const method = {
      method: "user.show",
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(fetchUserSuccess(res.data.data));
        } else {
          dispatch(fetchUserFail());
        }
      })
      .catch(() => {
        dispatch(fetchUserFail());
      });
  };
};

//create user
export const createUserStart = () => {
  return {
    type: actionTypes.CREATE_USERS_START,
  };
};

export const createUserSuccess = () => {
  return {
    type: actionTypes.CREATE_USERS_SUCCESS,
  };
};

export const createUserFail = () => {
  return {
    type: actionTypes.CREATE_USERS_FAIL,
  };
};

export const initCreateUser = (params) => {
  return (dispatch) => {
    dispatch(createUserStart());

    const method = {
      method: "admintools.add-user",
      params: params,
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(createUserSuccess());
          dispatch(initFetchUsers());
        } else {
          dispatch(createUserFail());
        }
      })
      .catch(() => {
        dispatch(createUserFail());
      });
  };
};

//delete user
export const deleteUserStart = () => {
  return {
    type: actionTypes.DELETE_USERS_START,
  };
};

export const deleteUserSuccess = () => {
  return {
    type: actionTypes.DELETE_USERS_SUCCESS,
  };
};

export const deleteUserFail = () => {
  return {
    type: actionTypes.DELETE_USERS_FAIL,
  };
};

export const initDeleteUser = (username) => {
  return (dispatch) => {
    dispatch(deleteUserStart());

    const params = {
      username: username,
    };
    const method = {
      method: "admintools.delete-user",
      params,
    };

    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(deleteUserSuccess());
          dispatch(initFetchUsers());
        } else {
          dispatch(deleteUserFail());
        }
      })
      .catch(() => {
        dispatch(deleteUserFail());
      });
  };
};

//edit user
export const editUserStart = () => {
  return {
    type: actionTypes.EDIT_USERS_START,
  };
};

export const editUserSuccess = () => {
  return {
    type: actionTypes.EDIT_USERS_SUCCESS,
  };
};

export const editUserFail = () => {
  return {
    type: actionTypes.EDIT_USERS_FAIL,
  };
};

export const initEditUser = (param) => {
  let method;
  let params = {
    username: param.username,
  };
  switch (param["edit-type"]) {
    case "DisableUser":
      method = {
        method: "admintools.disable-user",
        params,
      };
      break;
    case "EnableUser":
      method = {
        method: "admintools.enable-user",
        params,
      };
      break;
    case "DisableLdap":
      method = {
        method: "admintools.ldap-disable",
        params,
      };
      break;
    case "EnableLdap":
      method = {
        method: "admintools.ldap-enable",
        params,
      };
      break;
    default:
      return;
  }

  return (dispatch) => {
    dispatch(editUserStart());

    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(editUserSuccess());
          dispatch(initFetchUsers());
        } else {
          dispatch(editUserFail());
        }
      })
      .catch(() => {
        dispatch(editUserFail());
      });
  };
};

//change password
export const changePasswordStart = () => {
  return {
    type: actionTypes.CHANGE_PASSWORD_START,
  };
};

export const changePasswordSuccess = () => {
  return {
    type: actionTypes.CHANGE_PASSWORD_SUCCESS,
  };
};

export const changePasswordFail = () => {
  return {
    type: actionTypes.CHANGE_PASSWORD_FAIL,
  };
};

export const initChangePassword = (params) => {
  return (dispatch) => {
    dispatch(changePasswordStart());

    const method = {
      method: "admintools.change-password",
      params: params,
    };

    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(changePasswordSuccess());
          dispatch(initFetchUsers());
        } else {
          dispatch(changePasswordFail());
        }
      })
      .catch(() => {
        dispatch(changePasswordFail());
      });
  };
};
