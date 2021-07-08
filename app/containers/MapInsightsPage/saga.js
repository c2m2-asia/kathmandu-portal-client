import { call, put, takeLatest } from 'redux-saga/effects';

import {
  GET_MAP_DATA,
  GET_MAP_DATA_SUCCESS,
  GET_MAP_DATA_FAILURE,
} from './constants';
import Api from './api';

function* getMapData(action) {
  try {
    const response = yield call(Api.getMapData, action.payload);
    if (response.code !== 200) {
      yield put({
        type: GET_MAP_DATA_FAILURE,
        errorMessage: response.message,
      });
    } else {
      yield put({
        type: GET_MAP_DATA_SUCCESS,
        payload: response.data,
      });
    }
  } catch (error) {
    yield put({ type: GET_MAP_DATA_FAILURE, errorMessage: error });
  }
}

export default function* mapInsightsPageSaga() {
  yield takeLatest(GET_MAP_DATA, getMapData);
}
