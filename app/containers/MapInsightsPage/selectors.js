import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mapInsightsPage state domain
 */

const selectMapInsightsPageDomain = state =>
  state.mapInsightsPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MapInsightsPage
 */

const makeSelectMapInsightsPage = () =>
  createSelector(
    selectMapInsightsPageDomain,
    substate => substate,
  );

export default makeSelectMapInsightsPage;
export { selectMapInsightsPageDomain };
