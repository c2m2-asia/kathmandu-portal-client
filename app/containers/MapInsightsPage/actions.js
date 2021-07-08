/*
 *
 * MapInsightsPage actions
 *
 */

import { GET_MAP_DATA } from './constants';

export function getMapDataAction(timeIndex) {
  return {
    type: GET_MAP_DATA,
    payload: { timeIndex },
  };
}
