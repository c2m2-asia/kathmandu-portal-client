/*
 *
 * ChartInsightsPage reducer
 *
 */
import { fromJS } from 'immutable';
import {
  GET_CHART_DATA,
  GET_CHART_DATA_SUCCESS,
  GET_CHART_DATA_FAILURE,
} from './constants';

export const initialState = fromJS({
  loading: false,
  chartData: null,
  errorMessage: null,
});

/* eslint-disable default-case, no-param-reassign */
const chartInsightsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHART_DATA:
      return state.set('loading', true);
    case GET_CHART_DATA_SUCCESS:
      return state.set('loading', false).set('chartData', action.payload);
    case GET_CHART_DATA_FAILURE:
      return state
        .set('loading', false)
        .set('errorMessage', action.payload.message);
    default:
      return state;
  }
};

export default chartInsightsPageReducer;
