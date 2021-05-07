import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the chartInsightsPage state domain
 */

const selectChartInsightsPageDomain = state =>
  state.chartInsightsPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ChartInsightsPage
 */

const makeSelectChartInsightsPage = () =>
  createSelector(
    selectChartInsightsPageDomain,
    substate => substate,
  );

export default makeSelectChartInsightsPage;
export { selectChartInsightsPageDomain };
