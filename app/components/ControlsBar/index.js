/**
 *
 * ControlsBar
 *
 */

import React, { memo, useState } from 'react';
import { uid } from 'react-uid';
import clsx from 'clsx';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Chip from '@material-ui/core/Chip';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import NativeSelect from '@material-ui/core/NativeSelect';
import Typography from '@material-ui/core/Typography';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 140,
  },
  root: {
    // color: '#bbbbbb',
    fontWeight: 500,
  },
  select: {
    borderRadius: '25%',
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
}));

const dimensions = {
  businesses: [
    { label: 'Type', value: 'm_biz_type' },
    { label: 'Years in operation', value: 'm_biz_years_in_operation' },
  ],
  workforce: [
    { label: 'Gender', value: 'm_gender' },
    { label: 'Experience', value: 'm_years_of_experience' },
    { label: 'Education level', value: 'm_edu_levl' },
    { label: 'Age', value: 'm_age' },
  ],
};

const researchAreas = [
  {
    value: 'impact',
    label: 'Impact',
  },
  { value: 'need', label: 'Need' },
  { value: 'preparedness', label: 'Preparedness' },
  { value: 'outlook', label: 'Outlook' },
];

function ControlsBar({
  surveyArea,
  researchArea,
  setResearchArea,
  dimension,
  setDimension,
  viewType,
  setViewType,
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={clsx('container', classes.controlsContainer)}>
      <div className={classes.controlPrimary}>
        <Typography variant="body1" style={{ fontWeight: '600', color: '#B' }}>
          Explore
        </Typography>
        <Chip
          style={{ height: '50px', borderRadius: '25px', padding: '1rem' }}
          label={researchAreas.find(a => a.value === researchArea).label}
          clickable
          color="primary"
          onClick={handleToggle}
          onDelete={handleToggle}
          deleteIcon={<ExpandMoreIcon size="large" />}
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
        />
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    {researchAreas.map(area => (
                      <MenuItem
                        key={uid(area)}
                        value={area.value}
                        onClick={e => {
                          console.log(e.target.value);
                          handleClose(e);
                        }}
                      >
                        {area.label}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
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
        <Typography variant="body1" style={{ fontWeight: '600', color: '#B' }}>
          by
        </Typography>
        <FormControl variant="outlined" className={classes.formControl}>
          <Select
            classes={{
              root: classes.root,
              icon: classes.icon,
            }}
            native
            value={dimension}
            onChange={e => setDimension(e.target.value)}
            label="Age"
            inputProps={{
              name: 'age',
              id: 'outlined-age-native-simple',
            }}
          >
            {dimensions[surveyArea].map(dim => (
              <option key={uid(dim)} value={dim.value}>
                {dim.label}
              </option>
            ))}
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
  );
}

ControlsBar.propTypes = {
  surveyArea: PropTypes.string.isRequired,
  researchArea: PropTypes.string.isRequired,
  setResearchArea: PropTypes.func.isRequired,
  dimension: PropTypes.string.isRequired,
  setDimension: PropTypes.func.isRequired,
  viewType: PropTypes.string.isRequired,
  setViewType: PropTypes.func.isRequired,
};

export default memo(ControlsBar);
