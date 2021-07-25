/*
 *
 * Login APIs
 *
 */

import { BASE_URL } from 'utils/constants';
import { parseJSON } from 'utils/apiHelpers';

const getChartData = ({ surveyArea, researchArea, dimension }) =>
  dimension === 'none'
    ? fetch(
        `${BASE_URL}/viz/distributions/?survey=${surveyArea}&var_group=${researchArea}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      ).then(parseJSON)
    : fetch(
        `${BASE_URL}/viz/relationships/?survey=${surveyArea}&var_group=${researchArea}&dimension=${dimension}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      ).then(parseJSON);

const Api = {
  getChartData,
};

export default Api;
