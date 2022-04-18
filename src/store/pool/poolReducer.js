import { updateObject } from "../../utility/Utility";
import * as actionTypes from "./actionTypes";

const initialState = {
  pools: null,
  loading: false,
  error: false,
  loadingCreatePool: false,
  loadingExtendPool: false,
  loadingDeletePool: false,
  operationLoading: false,
  loadingRenamePool: false,

};

//fetch pool

const fetchPoolStart = (state) => {
  return updateObject(state, {
    loading: true,
    operationLoading: true,
    error: false,
  });
};

const fetchPoolSuccess = (state, action) => {
  return updateObject(state, {
    pools: action.pools,
    loading: false,
    operationLoading: false,
    error: false,
  });
};

const fetchPoolFail = (state) => {
  return updateObject(state, {
    loading: false,
    operationLoading: false,
    error: true,
  });
};

//delete pools

const deletePoolStart = (state) => {
  return updateObject(state, {
    loadingDeletePool: true,
    operationLoading: true,
    error: false,
  });
};

const deletePoolSuccess = (state, action) => {
  return updateObject(state, {
    loadingDeletePool: false,
    operationLoading: false,
    error: false,
  });
};

const deletePoolFail = (state) => {
  return updateObject(state, {
    loadingDeletePool: false,
    operationLoading: false,
    error: true,
  });
};

//extend pools

const extendPoolStart = (state) => {
  return updateObject(state, {
    loadingExtendPool: true,
    operationLoading: true,
    error: false,
  });
};

const extendPoolSuccess = (state, action) => {
  return updateObject(state, {
    loadingExtendPool: false,
    operationLoading: false,
    error: false,
  });
};

const extendPoolFail = (state) => {
  return updateObject(state, {
    loadingExtendPool: false,
    operationLoading: false,
    error: true,
  });
};

//create pool

const createPoolStart = (state) => {
  return updateObject(state, {
    loadingCreatePool: true,
    operationLoading: true,
    error: false,
  });
};

const createPoolSuccess = (state) => {
  return updateObject(state, {
    loadingCreatePool: false,
    operationLoading: false,
    error: false,
  });
};

const createPoolFail = (state) => {
  return updateObject(state, {
    loadingCreatePool: false,
    operationLoading: false,
    error: true,
  });
};

//rename pool
const renamePoolstart = (state) => {
  return updateObject(state, {
    loadingRenamePool: true,
    operationLoading: true,
    error: false
  })
}

const renamePoolSuccess = (state) => {
  return updateObject(state, {
    loadingRenamePool: false,
    operationLoading: false,
    error: false
  })
}

const renamePoolfail = (state) => {
  return updateObject(state, {
    loadingRenamePool: false,
    operationLoading: false,
    error: true
  })
}

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    //fetch pool
    case actionTypes.FETCH_POOLS_START:
      return fetchPoolStart(state, action);
    case actionTypes.FETCH_POOLS_SUCCESS:
      return fetchPoolSuccess(state, action);
    case actionTypes.FETCH_POOLS_FAIL:
      return fetchPoolFail(state, action);

    //delete pool
    case actionTypes.DELETE_POOLS_START:
      return deletePoolStart(state, action);
    case actionTypes.DELETE_POOLS_SUCCESS:
      return deletePoolSuccess(state, action);
    case actionTypes.DELETE_POOLS_FAIL:
      return deletePoolFail(state, action);

    //extend pool
    case actionTypes.EXTEND_POOLS_START:
      return extendPoolStart(state, action);
    case actionTypes.EXTEND_POOLS_SUCCESS:
      return extendPoolSuccess(state, action);
    case actionTypes.EXTEND_POOLS_FAIL:
      return extendPoolFail(state, action);

    //create pool
    case actionTypes.CREATE_POOL_START:
      return createPoolStart(state, action);
    case actionTypes.CREATE_POOL_SUCCESS:
      return createPoolSuccess(state, action);
    case actionTypes.CREATE_POOL_FAIL:
      return createPoolFail(state, action);

    //rename Pool
    case actionTypes.RENAME_POOL_START:
      return renamePoolstart(state, action);
    case actionTypes.RENAME_POOL_SUCCESS:
      return renamePoolSuccess(state, action);
    case actionTypes.RENAME_POOL_FAIL:
      return renamePoolfail(state, action);

    default:
      return state;
  }
};

export default reducer;
