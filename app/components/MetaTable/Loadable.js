/**
 *
 * Asynchronously loads the component for MetaTable
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
