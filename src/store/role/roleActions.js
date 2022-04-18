import * as actionTypes from "./actionTypes";
import api_url from "../../api/api";
import axios from "../../api/axios";

//fetch role
export const fetchRoleStart = () => {
  return {
    type: actionTypes.FETCH_ROLE_START,
  };
};

export const fetchRoleSuccess = (roles) => {
  return {
    type: actionTypes.FETCH_ROLE_SUCCESS,
    roles: roles,
  };
};

export const fetchRoleFail = () => {
  return {
    type: actionTypes.FETCH_ROLE_FAIL,
  };
};

export const initFetchRoles = () => {
  return (dispatch) => {
    dispatch(fetchRoleStart());
    const method = {
      method: "acl.role",
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(fetchRoleSuccess(res.data.data));
        } else {
          dispatch(fetchRoleFail());
        }
      })
      .catch(() => {
        dispatch(fetchRoleFail());
      });
  };
};

//create role
export const createRoleStart = () => {
  return {
    type: actionTypes.CREATE_ROLE_START,
  };
};

export const createRoleSuccess = () => {
  return {
    type: actionTypes.CREATE_ROLE_SUCCESS,
  };
};

export const createRoleFail = () => {
  return {
    type: actionTypes.CREATE_ROLE_FAIL,
  };
};

export const initCreateRole = (params) => {
  return (dispatch) => {
    dispatch(createRoleStart());
    const method = {
      method: "acl.add-role",
      params: params,
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(createRoleSuccess());
          dispatch(initFetchRoles());
        } else {
          dispatch(createRoleFail());
        }
      })
      .catch(() => {
        dispatch(createRoleFail());
      });
  };
};

//delete role
export const deleteRoleStart = () => {
  return {
    type: actionTypes.DELETE_ROLE_START,
  };
};

export const deleteRoleSuccess = () => {
  return {
    type: actionTypes.DELETE_ROLE_SUCCESS,
  };
};

export const deleteRoleFail = () => {
  return {
    type: actionTypes.DELETE_ROLE_FAIL,
  };
};

export const initDeleteRole = (roleId) => {
  return (dispatch) => {
    dispatch(deleteRoleStart());
    const params = {
      role: roleId,
    };
    const method = {
      method: "acl.delete-role",
      params,
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(deleteRoleSuccess());
          dispatch(initFetchRoles());
        } else {
          dispatch(deleteRoleFail());
        }
      })
      .catch(() => {
        dispatch(deleteRoleFail());
      });
  };
};

//fetch role entities
export const fetchEntitiesStart = () => {
  return {
    type: actionTypes.FETCH_ENTITIES_START,
  };
};

export const fetchEntitiesSuccess = (entities) => {
  return {
    type: actionTypes.FETCH_ENTITIES_SUCCESS,
    entities: entities,
  };
};

export const fetchEntitiesFail = () => {
  return {
    type: actionTypes.FETCH_ENTITIES_FAIL,
  };
};

export const initFetchEntities = () => {
  return (dispatch) => {
    dispatch(fetchEntitiesStart());

    const method = {
      method: "acl.entity",
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(fetchEntitiesSuccess(res.data.data));
        } else {
          dispatch(fetchEntitiesFail());
        }
      })
      .catch(() => {
        dispatch(fetchEntitiesFail());
      });
  };
};
