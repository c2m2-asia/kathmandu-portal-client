import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the downloads state domain
 */

const selectDownloadsDomain = state => state.downloads || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Downloads
 */

const makeSelectDownloads = () =>
  createSelector(
    selectDownloadsDomain,
    substate => substate,
  );

export default makeSelectDownloads;
export { selectDownloadsDomain };
