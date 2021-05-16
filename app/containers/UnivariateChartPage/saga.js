import { call, put, takeLatest } from 'redux-saga/effects';

import {
  GET_UNIVARIATE_DATA,
  GET_UNIVARIATE_DATA_SUCCESS,
  GET_UNIVARIATE_DATA_FAILURE,
} from './constants';
import Api from './api';

function* getUnivariateData(action) {
  try {
    const response = yield call(Api.getUnivariateData, action.payload);
    if (response.code !== 200) {
      yield put({
        type: GET_UNIVARIATE_DATA_FAILURE,
        errorMessage: response.message,
      });
    } else {
      yield put({
        type: GET_UNIVARIATE_DATA_SUCCESS,
        payload: response.data,
      });
    }
  } catch (error) {
    yield put({ type: GET_UNIVARIATE_DATA_FAILURE, errorMessage: error });
  }
}
export default function* univariateChartPageSaga() {
  yield takeLatest(GET_UNIVARIATE_DATA, getUnivariateData);
}
