/**
 *
 * UnivariateSurveyAreaSelector
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function UnivariateSurveyAreaSelector() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

UnivariateSurveyAreaSelector.propTypes = {};

export default memo(UnivariateSurveyAreaSelector);
