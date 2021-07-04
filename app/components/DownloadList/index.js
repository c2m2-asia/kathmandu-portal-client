/**
 *
 * DownloadList
 *
 */

import React, { memo } from 'react';
import './DownloadList.css';
import DownloadForm from './DownloadForm';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

// const spanStyle = {
//   marginTop: '5%',
//   marginLeft: '1%',
//   display: 'inline-block',
// };
// const iconStyle = {
//   marginTop: '5%',
//   marginLeft: '90%',
//   fontSize: '30px',
//   display: 'inline-block',
//   position: 'relative',
// };

function DownloadList() {
  return <DownloadForm />;
}

DownloadList.propTypes = {};

export default memo(DownloadList);
