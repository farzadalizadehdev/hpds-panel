import { updateObject } from "../../utility/Utility";
import * as actionTypes from "./actionTypes";

const initialState = {
  resource: null,
  loading: false,
  error: false,
};

const fetchResourceStart = (state) => {
  return updateObject(state, {
    loading: true,
    error: false,
  });
};

const fetchResourceSuccess = (state, action) => {
  return updateObject(state, {
    resource: action.resource,
    loading: false,
    error: false,
  });
};

const fetchResourceFail = (state) => {
  return updateObject(state, {
    loading: false,
    error: true,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RESOURCE_START:
      return fetchResourceStart(state, action);
    case actionTypes.FETCH_RESOURCE_SUCCESS:
      return fetchResourceSuccess(state, action);
    case actionTypes.FETCH_RESOURCE_FAIL:
      return fetchResourceFail(state, action);
    default:
      return state;
  }
};

export default reducer;
