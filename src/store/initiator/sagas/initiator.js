import axios from '../../../api/axios'
import api_url from '../../../api/api'
import { put } from 'redux-saga/effects'
import * as actions from '../../store'

export function* initFetchInitiatorSaga() {
    const types = ["fc", "iscsi"];
    let initiatorData = [];
    yield put(actions.fetchInitiatorStart())
    try {
        for (let type of types) {
            const method = {
                method: "initiator.show",
                params: {
                    type: type,
                },
            };
            const response = yield axios.post(api_url, method);
            if (response.data.data) {
                initiatorData = [
                    ...initiatorData,
                    {
                        type: type,
                        data: response.data.data,
                    },
                ];
            }
        }
        yield put(actions.fetchInitiatorSuccess(initiatorData))
    } catch {
        yield put(actions.fetchInitiatorFail());
    }
}