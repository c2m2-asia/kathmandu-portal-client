/**
 *
 * Asynchronously loads the component for UnivariateChartView
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
