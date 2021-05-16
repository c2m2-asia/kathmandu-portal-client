/*
 *
 * UnivariateChartPage reducer
 *
 */
import { fromJS } from 'immutable';
import {
  GET_UNIVARIATE_DATA,
  GET_UNIVARIATE_DATA_SUCCESS,
  GET_UNIVARIATE_DATA_FAILURE,
} from './constants';

export const initialState = fromJS({
  loading: false,
  univariateData: null,
  errorMessage: null,
});

/* eslint-disable default-case, no-param-reassign */
const univariateChartPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_UNIVARIATE_DATA:
      return state.set('loading', true);
    case GET_UNIVARIATE_DATA_SUCCESS:
      return state.set('loading', false).set('univariateData', action.payload);
    case GET_UNIVARIATE_DATA_FAILURE:
      return state
        .set('loading', false)
        .set('errorMessage', action.payload.message);
    default:
      return state;
  }
};

export default univariateChartPageReducer;
