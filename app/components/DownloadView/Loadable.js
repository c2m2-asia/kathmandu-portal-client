/**
 *
 * Asynchronously loads the component for DownloadView
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
