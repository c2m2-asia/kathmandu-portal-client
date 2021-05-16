import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the univariateChartPage state domain
 */

const selectUnivariateChartPageDomain = state =>
  state.univariateChartPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by UnivariateChartPage
 */

const makeSelectUnivariateChartPage = () =>
  createSelector(
    selectUnivariateChartPageDomain,
    substate => substate,
  );

export default makeSelectUnivariateChartPage;
export { selectUnivariateChartPageDomain };
