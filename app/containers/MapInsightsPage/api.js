/*
 *
 * Login APIs
 *
 */

import { BASE_URL } from 'utils/constants';
import { parseJSON } from 'utils/apiHelpers';

const getMapData = ({ timeIndex }) =>
  fetch(`${BASE_URL}/viz/businessmapinsights/?timeindex=${timeIndex}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(parseJSON);

const Api = {
  getMapData,
};

export default Api;
