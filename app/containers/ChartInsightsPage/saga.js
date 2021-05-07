import { call, put, takeLatest } from 'redux-saga/effects';

import {
  GET_CHART_DATA,
  GET_CHART_DATA_SUCCESS,
  GET_CHART_DATA_FAILURE,
} from './constants';
import Api from './api';

function* getChartData(action) {
  console.log("saga", action);
  try {
    const response = yield call(Api.getChartData, action.payload);
    console.log("response", response);
    if (response.status !== 200) {
      yield put({
        type: GET_CHART_DATA_FAILURE,
        errorMessage: response.message,
      });
    } else {
      yield put({
        type: GET_CHART_DATA_SUCCESS,
        payload: response.data,
      });
    }
  } catch (error) {
    yield put({ type: GET_CHART_DATA_FAILURE, errorMessage: error });
  }
}

// Individual exports for testing
export default function* chartInsightsPageSaga() {
  yield takeLatest(GET_CHART_DATA, getChartData);
}
