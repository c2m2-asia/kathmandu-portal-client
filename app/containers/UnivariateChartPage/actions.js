/*
 *
 * UnivariateChartPage actions
 *
 */

import { GET_UNIVARIATE_DATA } from './constants';

export function getUnivariateDataAction(surveyArea, researchArea) {
  return {
    type: GET_UNIVARIATE_DATA,
    payload: { surveyArea, researchArea },
  };
}
