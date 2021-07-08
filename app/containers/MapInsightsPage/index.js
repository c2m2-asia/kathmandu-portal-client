/**
 *
 * MapInsightsPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectMapInsightsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import MapInsightsView from 'components/MapInsightsView/Loadable';

import { getMapDataAction } from './actions';

export function MapInsightsPage({ mapInsightsPage, getMapData }) {
  useInjectReducer({ key: 'mapInsightsPage', reducer });
  useInjectSaga({ key: 'mapInsightsPage', saga });

  return (
    <div>
      {
        //   <Helmet>
        //   <title>MapInsightsPage</title>
        //   <meta name="description" content="Description of MapInsightsPage" />
        // </Helmet>
      }
      <MapInsightsView
        getMapData={getMapData}
        mapData={mapInsightsPage.get('mapData')}
      />
    </div>
  );
}

MapInsightsPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  mapInsightsPage: PropTypes.object.isRequired,
  getMapData: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mapInsightsPage: makeSelectMapInsightsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getMapData: timeIndex => {
      dispatch(getMapDataAction(timeIndex));
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
)(MapInsightsPage);
