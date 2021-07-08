/*
 *
 * MapInsightsPage reducer
 *
 */
import { fromJS } from 'immutable';
import {
  GET_MAP_DATA,
  GET_MAP_DATA_SUCCESS,
  GET_MAP_DATA_FAILURE,
} from './constants';

export const initialState = fromJS({
  loading: false,
  mapData: null,
  errorMessage: null,
});

/* eslint-disable default-case, no-param-reassign */
const mapInsightsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MAP_DATA:
      return state.set('loading', true);
    case GET_MAP_DATA_SUCCESS:
      return state.set('loading', false).set('mapData', action.payload);
    case GET_MAP_DATA_FAILURE:
      return state
        .set('loading', false)
        .set('errorMessage', action.payload.message);
    default:
      return state;
  }
};

export default mapInsightsPageReducer;
