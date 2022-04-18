import { updateObject } from "../../../utility/Utility";
import * as actionType from "./actionTypes";

const initialState = {
  recipient: null,
  loading: false,
  error: false,
  loadingImport: false,
  loadingCreateRecipient: false,
  loadingDeleteRecipient: false,
  loadingEditRecipient: false,
  operationLoading: false,
};

//fetch recipient
const fetchRecipientStart = (state) => {
  return updateObject(state, {
    loading: true,
    error: false,
  });
};

const fetchRecipientSuccess = (state, action) => {
  return updateObject(state, {
    recipient: action.recipient,
    loading: false,
    error: false,
  });
};

const fetchRecipientFail = (state) => {
  return updateObject(state, {
    loading: false,
    error: true,
  });
};

//import recipient
const importRecipientStart = (state) => {
  return updateObject(state, {
    loadingImport: true,
    error: false,
  });
};

const importRecipientSuccess = (state, action) => {
  return updateObject(state, {
    loadingImport: false,
    error: false,
    importRecipient: action.importRecipient,
  });
};

const importRecipientFail = (state) => {
  return updateObject(state, {
    loadingImport: false,
    error: true,
  });
};
//create recipient
const createRecipientStart = (state) => {
  return updateObject(state, {
    loadingCreateRecipient: true,
    operationLoading: true,
    error: false,
  });
};

const createRecipientSuccess = (state) => {
  return updateObject(state, {
    loadingCreateRecipient: false,
    operationLoading: false,
    error: false,
  });
};

const createRecipientFail = (state) => {
  return updateObject(state, {
    loadingCreateRecipient: false,
    operationLoading: false,
    error: true,
  });
};

//delete recipient
const deleteRecipientStart = (state) => {
  return updateObject(state, {
    loadingDeleteRecipient: true,
    operationLoading: true,
    error: false,
  });
};

const deleteRecipientSuccess = (state) => {
  return updateObject(state, {
    loadingDeleteRecipient: false,
    operationLoading: false,
    error: false,
  });
};

const deleteRecipientFail = (state) => {
  return updateObject(state, {
    loadingDeleteRecipient: false,
    operationLoading: false,
    error: true,
  });
};

//edit recipient
const editRecipientStart = (state) => {
  return updateObject(state, {
    loadingEditRecipient: true,
    operationLoading: true,
    error: false,
  });
};

const editRecipientSuccess = (state) => {
  return updateObject(state, {
    loadingEditRecipient: false,
    operationLoading: false,
    error: false,
  });
};

const editRecipientFail = (state) => {
  return updateObject(state, {
    loadingEditRecipient: false,
    operationLoading: false,
    error: true,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //fetch recipient
    case actionType.FETCH_RECIPIENT_START:
      return fetchRecipientStart(state, action);
    case actionType.FETCH_RECIPIENT_SUCCESS:
      return fetchRecipientSuccess(state, action);
    case actionType.FETCH_RECIPIENT_FAIL:
      return fetchRecipientFail(state, action);
    //import recipient
    case actionType.IMPORT_RECIPIENT_START:
      return importRecipientStart(state, action);
    case actionType.IMPORT_RECIPIENT_SUCCESS:
      return importRecipientSuccess(state, action);
    case actionType.IMPORT_RECIPIENT_FAIL:
      return importRecipientFail(state, action);
    //create recipient
    case actionType.CREATE_RECIPIENT_START:
      return createRecipientStart(state, action);
    case actionType.CREATE_RECIPIENT_SUCCESS:
      return createRecipientSuccess(state, action);
    case actionType.CREATE_RECIPIENT_FAIL:
      return createRecipientFail(state, action);
    //delete recipient
    case actionType.DELETE_RECIPIENT_START:
      return deleteRecipientStart(state, action);
    case actionType.DELETE_RECIPIENT_SUCCESS:
      return deleteRecipientSuccess(state, action);
    case actionType.DELETE_RECIPIENT_FAIL:
      return deleteRecipientFail(state, action);
    //edit recipient
    case actionType.EDIT_RECIPIENT_START:
      return editRecipientStart(state, action);
    case actionType.EDIT_RECIPIENT_SUCCESS:
      return editRecipientSuccess(state, action);
    case actionType.EDIT_RECIPIENT_FAIL:
      return editRecipientFail(state, action);
    default:
      return state;
  }
};

export default reducer;
