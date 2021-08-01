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
import 'intro.js/introjs.css';

function SpotlightWalkthrough({ dimension, viewUrl }) {
  const [isTourEnabled, setIsTourEnabled] = useState(false);

  const steps = {
    'chart-insights': [
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
        intro:
          'Charts are based on the active controls(survey area, research area, dimension).',
      },
    ],
    'map-insights': [
      {
        element: '.highlights-step',
        intro:
          'This is the highlight selection section. These are some of the key findings of the survey.',
        position: 'right',
      },
      {
        element: '.impact-step',
        intro:
          'Highlights have been categorized by their research areas. You can select a highlight to explore by clicking on it.',
        position: 'right',
      },
      {
        element: '.options-step',
        intro:
          'These are the options for the question from which the selected highlight is extracted. The green highlighted card represents the currently selected option.',
        position: 'right',
      },
      {
        element: '.map-step',
        intro:
          'Map shows how businesses/workers are distributed throughout Kathmandu for the active highlight and the active option.',
        position: 'right',
      },
      {
        element: '.timeline-step',
        intro:
          'You can also browse the map in different timeline of the survey.',
        position: 'right',
      },
      {
        element: '.static-map-step',
        intro: 'Below you can also find some static map visualizations.',
        position: 'right',
      },
    ],
  };

  return (
    <div>
      <Steps
        enabled={isTourEnabled}
        steps={steps[viewUrl]}
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
