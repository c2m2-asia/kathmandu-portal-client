/*
 *
 * Login APIs
 *
 */

import { BASE_URL } from 'utils/constants';
import { parseJSON } from 'utils/apiHelpers';

const getUnivariateData = ({ surveyArea, researchArea }) =>
  fetch(
    `${BASE_URL}/viz/distributions/?survey=${surveyArea}&var_group=${researchArea}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ).then(parseJSON);

const Api = {
  getUnivariateData,
};

export default Api;
