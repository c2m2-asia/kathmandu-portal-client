/*
 *
 * ChartInsightsPage actions
 *
 */

import { GET_CHART_DATA } from './constants';

export function getChartDataAction(researchArea, dimension) {
  return {
    type: GET_CHART_DATA,
    payload: { researchArea, dimension },
  };
}
