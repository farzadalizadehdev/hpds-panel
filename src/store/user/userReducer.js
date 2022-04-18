import { updateObject } from "../../utility/Utility";
import * as actionTypes from "./actionTypes";

const initialState = {
  users: null,
  onlineUsers: null,
  loading: false,
  error: false,
  loadingCreateUser: false,
  loadingDeleteUser: false,
  loadingEditUser: false,
  loadingChangePassword: false,
  operationLoading: false,
};

//fetch users
const fetchUserStart = (state) => {
  return updateObject(state, {
    loading: true,
    error: false,
  });
};

const fetchUserSuccess = (state, action) => {
  let onlineUsers = action.users.filter((user) => user.online === "Yes");
  return updateObject(state, {
    users: action.users,
    onlineUsers: onlineUsers,
    loading: false,
    error: false,
  });
};

const fetchUserFail = (state) => {
  return updateObject(state, {
    loading: false,
    error: true,
  });
};

//create user
const createUserStart = (state) => {
  return updateObject(state, {
    loadingCreateUser: true,
    operationLoading: true,
    error: false,
  });
};

const createUserSuccess = (state) => {
  return updateObject(state, {
    loadingCreateUser: false,
    operationLoading: false,
    error: false,
  });
};

const createUserFail = (state) => {
  return updateObject(state, {
    loadingCreateUser: false,
    operationLoading: false,
    error: true,
  });
};

//delete user
const deleteUserStart = (state) => {
  return updateObject(state, {
    operationLoading: true,
    loadingDeleteUser: true,
    error: false,
  });
};

const deleteUserSuccess = (state) => {
  return updateObject(state, {
    loadingDeleteUser: false,
    operationLoading: false,
    error: false,
  });
};

const deleteUserFail = (state) => {
  return updateObject(state, {
    operationLoading: false,
    loadingDeleteUser: false,
    error: true,
  });
};

//edit user
const editUserStart = (state) => {
  return updateObject(state, {
    loadingEditUser: true,
    operationLoading: true,
    error: false,
  });
};

const editUserSuccess = (state) => {
  return updateObject(state, {
    operationLoading: false,
    loadingEditUser: false,
    error: false,
  });
};

const editUserFail = (state) => {
  return updateObject(state, {
    operationLoading: false,
    loadingEditUser: false,
    error: true,
  });
};

//change password
const changePasswordStart = (state) => {
  return updateObject(state, {
    operationLoading: true,
    loadingChangePassword: true,
    error: false,
  });
};

const changePasswordSuccess = (state) => {
  return updateObject(state, {
    operationLoading: false,
    loadingChangePassword: false,
    error: false,
  });
};

const changePasswordFail = (state) => {
  return updateObject(state, {
    operationLoading: false,
    loadingChangePassword: false,
    error: true,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //fetch user
    case actionTypes.FETCH_USERS_START:
      return fetchUserStart(state, action);
    case actionTypes.FETCH_USERS_SUCCESS:
      return fetchUserSuccess(state, action);
    case actionTypes.FETCH_USERS_FAIL:
      return fetchUserFail(state, action);
    //create user
    case actionTypes.CREATE_USERS_START:
      return createUserStart(state, action);
    case actionTypes.CREATE_USERS_SUCCESS:
      return createUserSuccess(state, action);
    case actionTypes.CREATE_USERS_FAIL:
      return createUserFail(state, action);
    //delete user
    case actionTypes.DELETE_USERS_START:
      return deleteUserStart(state, action);
    case actionTypes.DELETE_USERS_SUCCESS:
      return deleteUserSuccess(state, action);
    case actionTypes.DELETE_USERS_FAIL:
      return deleteUserFail(state, action);
    //edit user
    case actionTypes.EDIT_USERS_START:
      return editUserStart(state, action);
    case actionTypes.EDIT_USERS_SUCCESS:
      return editUserSuccess(state, action);
    case actionTypes.EDIT_USERS_FAIL:
      return editUserFail(state, action);
    //change password
    case actionTypes.CHANGE_PASSWORD_START:
      return changePasswordStart(state, action);
    case actionTypes.CHANGE_PASSWORD_SUCCESS:
      return changePasswordSuccess(state, action);
    case actionTypes.CHANGE_PASSWORD_FAIL:
      return changePasswordFail(state, action);
    default:
      return state;
  }
};

export default reducer;
