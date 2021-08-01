/**
 *
 * SpotlightWalkthrough
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import { Steps, Hints } from 'intro.js-react';

function SpotlightWalkthrough({ dimension }) {
  const [isTourEnabled, setIsTourEnabled] = useState(false);

  const steps = [
    {
      element: '.controls-step',
      intro:
        'This is the control selection section. These tabs help you to browse survey results by different categories.',
      position: 'bottom',
      tooltipClass: 'myTooltipClass',
      highlightClass: 'myHighlightClass',
    },
    {
      element: '.surveyArea-step',
      intro: 'Select the survey area that you would like to browse.',
    },
    {
      element: '.researchArea-step',
      intro: 'Select the research area that you would like to browse.',
    },
    {
      element: '.dimension-step',
      intro: 'Select the dimension that you would like to browse.',
    },
    {
      element: '.viewType-step',
      intro:
        'Select whether you want to view data in tabular format or charts.',
    },
    {
      element: `${
        dimension === 'none'
          ? '.first-univariate-chart-step'
          : '.first-bivariate-chart-step'
      }`,
      position: 'bottom',
      intro: 'Charts are based on the selected controls.',
    },
  ];
  return (
    <div>
      <Steps
        enabled={isTourEnabled}
        steps={steps}
        initialStep={0}
        onExit={() => setIsTourEnabled(false)}
        options={{
          nextLabel: 'Next',
          prevLabel: 'Previous',
          skipLabel: 'Skip',
          doneLabel: 'Done',
          scrollToElement: true,
          showStepNumbers: false,
        }}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ textTransform: 'capitalize' }}
        endIcon={<LiveHelpIcon />}
        onClick={() => setIsTourEnabled(true)}
      >
        How to use
      </Button>
    </div>
  );
}

SpotlightWalkthrough.propTypes = {};

export default memo(SpotlightWalkthrough);
