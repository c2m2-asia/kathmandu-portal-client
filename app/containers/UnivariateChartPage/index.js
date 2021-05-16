/**
 *
 * UnivariateChartPage
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
import UnivariateChartView from 'components/UnivariateChartView/Loadable';
import makeSelectUnivariateChartPage from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

import { getUnivariateDataAction } from './actions';

export function UnivariateChartPage({
  univariateChartPage,
  getUnivariateData,
}) {
  useInjectReducer({ key: 'univariateChartPage', reducer });
  useInjectSaga({ key: 'univariateChartPage', saga });

  return (
    <div>
      <Helmet>
        <title>UnivariateChartPage</title>
        <meta name="description" content="Description of UnivariateChartPage" />
      </Helmet>
      <UnivariateChartView
        getUnivariateData={getUnivariateData}
        univariateData={univariateChartPage.get('univariateData')}
      />
    </div>
  );
}

UnivariateChartPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  univariateChartPage: PropTypes.object.isRequired,
  getUnivariateData: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  univariateChartPage: makeSelectUnivariateChartPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getUnivariateData: (surveyArea, researchArea) => {
      dispatch(getUnivariateDataAction(surveyArea, researchArea));
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
)(UnivariateChartPage);
