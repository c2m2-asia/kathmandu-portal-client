/**
 *
 * ChartInsightsPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import ChartInsightsView from 'components/ChartInsightsView';
import makeSelectChartInsightsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

import { getChartDataAction } from './actions';

export function ChartInsightsPage({ chartInsightsPage, getChartData }) {
  useInjectReducer({ key: 'chartInsightsPage', reducer });
  useInjectSaga({ key: 'chartInsightsPage', saga });

  return (
    <React.Fragment>
      <ChartInsightsView
        getChartData={getChartData}
        chartData={chartInsightsPage.get('chartData')}
        loading={chartInsightsPage.get('loading')}
      />
    </React.Fragment>
  );
}

ChartInsightsPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  getChartData: PropTypes.func.isRequired,
  chartInsightsPage: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  chartInsightsPage: makeSelectChartInsightsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getChartData: (surveyArea, researchArea, dimension) => {
      dispatch(getChartDataAction(surveyArea, researchArea, dimension));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ChartInsightsPage);
