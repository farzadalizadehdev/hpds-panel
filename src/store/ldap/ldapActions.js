import * as actionTypes from "./actionTypes";
import api_url from "../../api/api";
import axios from "../../api/axios";

//ldap system
export const fetchLdapStart = () => {
  return {
    type: actionTypes.FETCH_LDAP_START,
  };
};

export const fetchLdapSuccess = (ldap) => {
  return {
    type: actionTypes.FETCH_LDAP_SUCCESS,
    ldap: ldap,
  };
};

export const fetchLdapFail = () => {
  return {
    type: actionTypes.FETCH_LDAP_FAIL,
  };
};

export const initFetchLdap = () => {
  return (dispatch) => {
    dispatch(fetchLdapStart());
    const method = {
      method: "ldap.show",
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(fetchLdapSuccess(res.data.data));
        } else {
          dispatch(fetchLdapFail());
        }
      })
      .catch(() => {
        dispatch(fetchLdapFail());
      });
  };
};

//ldap test
export const ldapTestStart = () => {
  return {
    type: actionTypes.LDAP_TEST_START,
  };
};

export const ldapTestSuccess = () => {
  return {
    type: actionTypes.LDAP_TEST_SUCCESS,
  };
};

export const ldapTestFail = () => {
  return {
    type: actionTypes.LDAP_TEST_FAIL,
  };
};

export const initTestLdap = (params) => {
  return (dispatch) => {
    dispatch(ldapTestStart());
    const method = {
      method: "ldap.test",
      params: params,
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(ldapTestSuccess());
        } else {
          dispatch(ldapTestFail());
        }
      })
      .catch(() => {
        dispatch(ldapTestFail());
      });
  };
};

//ldap config
export const ldapConfigStart = () => {
  return {
    type: actionTypes.LDAP_CONFIG_START,
  };
};

export const ldapConfigSuccess = () => {
  return {
    type: actionTypes.LDAP_CONFIG_SUCCESS,
  };
};

export const ldapConfigFail = () => {
  return {
    type: actionTypes.LDAP_CONFIG_FAIL,
  };
};

export const initConfigLdap = (params) => {
  return (dispatch) => {
    dispatch(ldapConfigStart());

    const method = {
      method: "ldap.config",
      params: params,
    };

    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(ldapConfigSuccess());
        } else {
          dispatch(ldapConfigFail());
        }
      })
      .catch(() => {
        dispatch(ldapConfigFail());
      });
  };
};
