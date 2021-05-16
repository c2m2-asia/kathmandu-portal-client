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
// import NativeSelect from '@material-ui/core/NativeSelect';
import Typography from '@material-ui/core/Typography';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 140,
  },
  root: {
    color: '#bbbbbb',
    fontWeight: 600,
    background: 'rgba(0,0,0,0.1)',
  },
  icon: {
    color: '#bbbbbb',
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
    <div style={{ background: '#084558' }}>
      <div className={clsx('container', classes.controlsContainer)}>
        <div className={classes.controlPrimary}>
          <Typography
            variant="body1"
            style={{ fontWeight: '600', color: '#B' }}
          >
            Explore by
          </Typography>
          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              classes={{
                root: classes.root,
                icon: classes.icon,
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
        <div>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel shrink htmlFor="outlined-age-native-simple">
              View type
            </InputLabel>
            <Select
              classes={{
                root: classes.root,
                icon: classes.icon,
              }}
              native
              notched
              value={viewType}
              onChange={e => setViewType(e.target.value)}
              label="View type"
              inputProps={{
                name: 'age',
                id: 'outlined-age-native-simple',
              }}
            >
              <option value="chart">Chart</option>
              <option value="table">Table</option>
            </Select>
          </FormControl>
        </div>
      </div>
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
