import { updateObject } from "../../utility/Utility";
import * as actionTypes from "./actionTypes";

const initialState = {
    node: null,
    loading: false,
    error: false,
};

//fetch pool

const getNodeStart = (state) => {
    return updateObject(state, {
        loading: true,
        error: false,
    });
};

const getNodeSuccess = (state, action) => {
    return updateObject(state, {
        node: action.node,
        loading: false,
        error: false,
    });
};

const getNodeFail = (state) => {
    return updateObject(state, {
        loading: false,
        error: true,
    });
};

//reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        //get node
        case actionTypes.GET_NODE_START:
            return getNodeStart(state, action);
        case actionTypes.GET_NODE_SUCCESS:
            return getNodeSuccess(state, action);
        case actionTypes.GET_NODE_FAIL:
            return getNodeFail(state, action);
        default:
            return state;
    }
};

export default reducer;
