/*
 *
 * Login APIs
 *
 */

import { BASE_URL } from 'utils/constants';
import { parseJSON } from 'utils/apiHelpers';

const getChartData = ({ researchArea, dimension }) =>
  fetch(
    `${BASE_URL}/viz/relationships/?var_group=${researchArea}&dimension=${dimension}`,
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
