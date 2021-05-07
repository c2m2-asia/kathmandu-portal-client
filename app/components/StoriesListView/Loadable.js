/**
 *
 * Asynchronously loads the component for StoriesListView
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
