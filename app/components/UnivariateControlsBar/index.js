/**
 *
 * UnivariateControlsBar
 *
 */

import React, { memo, useState } from 'react';
import { uid } from 'react-uid';
import clsx from 'clsx';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import BarChartIcon from '@material-ui/icons/BarChart';
import TableChartIcon from '@material-ui/icons/TableChart';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import { primary } from 'theme';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 140,
  },
  root: {
    // color: '#bbbbbb',
    fontWeight: 500,
    // background: 'rgba(0,0,0,0.1)',
  },
  icon: {
    // color: '#bbbbbb',
  },
  controlPrimary: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
  controlsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  tabs: {
    // backgroundColor: 'red',
  },
  tab: {
    minWidth: '60px',
    width: '60px',
  },
  selected: {
    background: primary,
    color: 'white',
  },
}));

function UnivariateControlsBar({
  surveyArea,
  researchArea,
  setResearchArea,
  viewType,
  setViewType,
}) {
  const classes = useStyles();

  return (
    <div className={clsx('container', classes.controlsContainer)}>
      <div className={classes.controlPrimary}>
        <Typography variant="body1" style={{ fontWeight: '600', color: '#B' }}>
          Explore by
        </Typography>
        <FormControl variant="outlined" className={classes.formControl}>
          <Select
            classes={{
              root: classes.root,
              icon: classes.icon,
              select: classes.select,
            }}
            native
            value={researchArea}
            onChange={e => setResearchArea(e.target.value)}
            label="Age"
            inputProps={{
              name: 'age',
              id: 'outlined-age-native-simple',
            }}
          >
            <option value="impact">Impact</option>
            <option value="need">Need</option>
            <option value="preparedness">Preparedness</option>
            <option value="outlook">Outlook</option>
          </Select>
        </FormControl>
      </div>
      <Paper square>
        <Tabs
          classes={{ root: classes.tabs }}
          value={viewType}
          onChange={(e, value) => setViewType(value)}
          TabIndicatorProps={{
            style: {
              display: 'none',
            },
          }}
          aria-label="icon tabs example"
        >
          <Tab
            classes={{ root: classes.tab, selected: classes.selected }}
            icon={<BarChartIcon />}
            value="chart"
          />
          <Tab
            classes={{ root: classes.tab, selected: classes.selected }}
            icon={<TableChartIcon />}
            value="table"
          />
        </Tabs>
      </Paper>
    </div>
  );
}

UnivariateControlsBar.propTypes = {
  surveyArea: PropTypes.string.isRequired,
  researchArea: PropTypes.string.isRequired,
  setResearchArea: PropTypes.func.isRequired,
  viewType: PropTypes.string.isRequired,
  setViewType: PropTypes.func.isRequired,
};

export default memo(UnivariateControlsBar);
