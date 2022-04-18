import { updateObject } from "../../utility/Utility";
import * as actionTypes from "./actionTypes";

const initialState = {
  roles: null,
  entities: null,
  loading: false,
  error: false,
  loadingCreateRole: false,
  loadingEntities: false,
  loadingDeleteRole: false,
  operationLoading: false,
};

//fetch roles
const fetchRoleStart = (state) => {
  return updateObject(state, {
    loading: true,
    error: false,
  });
};

const fetchRoleSuccess = (state, action) => {
  return updateObject(state, {
    roles: action.roles,
    loading: false,
    error: false,
  });
};

const fetchRoleFail = (state) => {
  return updateObject(state, {
    loading: false,
    error: true,
  });
};

//create roles
const createRoleStart = (state) => {
  return updateObject(state, {
    loadingCreateRole: true,
    operationLoading: true,
    error: false,
  });
};

const createRoleSuccess = (state) => {
  return updateObject(state, {
    loadingCreateRole: false,
    operationLoading: false,
    error: false,
  });
};

const createRoleFail = (state) => {
  return updateObject(state, {
    loadingCreateRole: false,
    operationLoading: false,
    error: true,
  });
};

//delete role
const deleteRoleStart = (state) => {
  return updateObject(state, {
    loadingDeleteRole: true,
    operationLoading: true,
    error: false,
  });
};

const deleteRoleSuccess = (state) => {
  return updateObject(state, {
    loadingDeleteRole: false,
    operationLoading: false,
    error: false,
  });
};

const deleteRoleFail = (state) => {
  return updateObject(state, {
    loadingDeleteRole: false,
    operationLoading: false,
    error: true,
  });
};

//fetch entities
const fetchEntitiesStart = (state) => {
  return updateObject(state, {
    loadingEntities: true,
    error: false,
  });
};

const fetchEntitiesSuccess = (state, action) => {
  return updateObject(state, {
    entities: action.entities,
    loadingEntities: false,
    error: false,
  });
};

const fetchEntitiesFail = (state) => {
  return updateObject(state, {
    loadingEntities: false,
    error: true,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //fetch role
    case actionTypes.FETCH_ROLE_START:
      return fetchRoleStart(state, action);
    case actionTypes.FETCH_ROLE_SUCCESS:
      return fetchRoleSuccess(state, action);
    case actionTypes.FETCH_ROLE_FAIL:
      return fetchRoleFail(state, action);
    //create role
    case actionTypes.CREATE_ROLE_START:
      return createRoleStart(state, action);
    case actionTypes.CREATE_ROLE_SUCCESS:
      return createRoleSuccess(state, action);
    case actionTypes.CREATE_ROLE_FAIL:
      return createRoleFail(state, action);
    //delete role
    case actionTypes.DELETE_ROLE_START:
      return deleteRoleStart(state, action);
    case actionTypes.DELETE_ROLE_SUCCESS:
      return deleteRoleSuccess(state, action);
    case actionTypes.DELETE_ROLE_FAIL:
      return deleteRoleFail(state, action);
    //fetch entities
    case actionTypes.FETCH_ENTITIES_START:
      return fetchEntitiesStart(state, action);
    case actionTypes.FETCH_ENTITIES_SUCCESS:
      return fetchEntitiesSuccess(state, action);
    case actionTypes.FETCH_ENTITIES_FAIL:
      return fetchEntitiesFail(state, action);
    default:
      return state;
  }
};

export default reducer;
