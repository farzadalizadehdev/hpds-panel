import { takeEvery } from "redux-saga/effects";
import * as actionTypes from '../actions/types'
import { initFetchInitiatorSaga } from "./initiator";
export function* watchFetchInitiator() {
    yield takeEvery(actionTypes.INIT_FETCH_INITIATORS, initFetchInitiatorSaga);
}