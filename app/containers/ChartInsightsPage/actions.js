/*
 *
 * ChartInsightsPage actions
 *
 */

import { GET_CHART_DATA } from './constants';

export function getChartDataAction(surveyArea, researchArea, dimension) {
  return {
    type: GET_CHART_DATA,
    payload: { surveyArea, researchArea, dimension },
  };
}
