import { updateObject } from "../../utility/Utility";
import * as actionTypes from "./actionTypes";

const initialState = {
  loading: false,
  error: false,
  ldap: null,
  loadingTestLdap: false,
  loadingConfigLdap: false,
  operationLoading: false,
};

//fetch ldap
const fetchLdapStart = (state, action) => {
  return updateObject(state, {
    loading: true,
    error: false,
  });
};

const fetchLdapSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: false,
    ldap: action.ldap,
  });
};

const fetchLdapFail = (state) => {
  return updateObject(state, {
    loading: false,
    error: true,
  });
};

//ldap test
const ldapTestStart = (state) => {
  return updateObject(state, {
    loadingTestLdap: true,
    operationLoading: true,
    error: false,
  });
};

const ldapTestSuccess = (state) => {
  return updateObject(state, {
    loadingTestLdap: false,
    operationLoading: false,
    error: false,
  });
};

const ldapTestFail = (state) => {
  return updateObject(state, {
    loadingTestLdap: false,
    operationLoading: false,
    error: true,
  });
};

//ldap config
const ldapConfigStart = (state) => {
  return updateObject(state, {
    loadingConfigLdap: true,
    operationLoading: true,
    error: false,
  });
};

const ldapConfigSuccess = (state) => {
  return updateObject(state, {
    loadingConfigLdap: false,
    operationLoading: false,
    error: false,
  });
};

const ldapConfigFail = (state) => {
  return updateObject(state, {
    loadingConfigLdap: false,
    operationLoading: false,
    error: true,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //ldap fetch
    case actionTypes.FETCH_LDAP_START:
      return fetchLdapStart(state, action);
    case actionTypes.FETCH_LDAP_SUCCESS:
      return fetchLdapSuccess(state, action);
    case actionTypes.FETCH_LDAP_FAIL:
      return fetchLdapFail(state, action);
    //ldap test
    case actionTypes.LDAP_TEST_START:
      return ldapTestStart(state, action);
    case actionTypes.LDAP_TEST_SUCCESS:
      return ldapTestSuccess(state, action);
    case actionTypes.LDAP_TEST_FAIL:
      return ldapTestFail(state, action);
    //ldap config
    case actionTypes.LDAP_CONFIG_START:
      return ldapConfigStart(state, action);
    case actionTypes.LDAP_CONFIG_SUCCESS:
      return ldapConfigSuccess(state, action);
    case actionTypes.LDAP_CONFIG_FAIL:
      return ldapConfigFail(state, action);
    default:
      return state;
  }
};

export default reducer;
