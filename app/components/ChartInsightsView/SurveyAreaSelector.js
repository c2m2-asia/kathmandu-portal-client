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
    color: '#2a9d8f',
  },
  wrapper: {
    textTransform: 'capitalize',
    fontWeight: '600',
    fontSize: '1.15rem',
  },
}));

function SurveyAreaSelector({ surveyArea, setSurveyArea, setDimension }) {
  const classes = useStyles();

  return (
    <div
      className="container mt-3"
      style={{ borderBottom: '1px solid #EBEBEB' }}
    >
      <Tabs
        value={surveyArea}
        onChange={(e, value) => {
          setSurveyArea(value);
          setDimension(
            value === 'businesses' ? 'm_biz_type' : 'm_years_of_experience',
          );
        }}
        indicatorColor="primary"
        TabIndicatorProps={{
          style: {
            height: '4px',
          },
        }}
      >
        <Tab
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
    </div>
  );
}

SurveyAreaSelector.propTypes = {
  surveyArea: PropTypes.string.isRequired,
  setSurveyArea: PropTypes.func.isRequired,
  setDimension: PropTypes.func.isRequired,
};

export default memo(SurveyAreaSelector);
