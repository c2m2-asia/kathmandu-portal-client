/**
 *
 * Downloads
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
import DownloadsList from 'components/DownloadList/Loadable';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDownloads from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

export function Downloads() {
  useInjectReducer({ key: 'downloads', reducer });
  useInjectSaga({ key: 'downloads', saga });

  return (
    <div>
      <Helmet>
        <title>Downloads</title>
        <meta name="description" content="Description of Downloads" />
      </Helmet>
      <DownloadsList />
    </div>
  );
}

Downloads.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  downloads: makeSelectDownloads(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Downloads);
