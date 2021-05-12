/**
 *
 * SurveyAreaSelector
 *
 */

import React, { memo } from 'react';
// import clsx from 'clsx';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const useStyles = makeStyles(theme => ({
  selected: {
    outline: 'none',
  },
  wrapper: {
    textTransform: 'capitalize',
    fontWeight: '800',
    fontSize: '1.15rem',
  },
}));

function SurveyAreaSelector({ surveyArea, setSurveyArea, setDimension }) {
  const classes = useStyles();

  return (
    <Tabs

      value={surveyArea}
      onChange={(e, value) => {
        setSurveyArea(value);
        setDimension(value === 'businesses' ? 'type' : 'm_edu_levl');
      }}
      indicatorColor="primary"
      centered
    >
      <Tab
        disabled
        classes={{
          wrapper: classes.wrapper,
          selected: classes.selected,
        }}
        label="Businesses"
        value="businesses"
      />
      <Tab
        classes={{
          wrapper: classes.wrapper,
          selected: classes.selected,
        }}
        className={classes.tab}
        label="Workforce"
        value="workforce"
      />
    </Tabs>
  );
}

SurveyAreaSelector.propTypes = {
  surveyArea: PropTypes.string.isRequired,
  setSurveyArea: PropTypes.func.isRequired,
  setDimension: PropTypes.func.isRequired,
};

export default memo(SurveyAreaSelector);
