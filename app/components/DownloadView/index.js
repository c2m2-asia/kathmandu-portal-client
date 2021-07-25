/**
 *
 * DownloadView
 *
 */

import React, { useState, memo } from 'react';
import { uid } from 'react-uid';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import BusinessIcon from '@material-ui/icons/Business';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import Button from '@material-ui/core/Button';
import MuiAlert from '@material-ui/lab/Alert';
import Typography from '@material-ui/core/Typography';
import MetaTable from 'components/MetaTable/Loadable';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './styles.css';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  formLabel: {
    alignItems: 'flex-start',
  },
}));

function DownloadView() {
  const classes = useStyles();
  const headers = {
    businesses: {
      name: 'businesses',
      label: 'Businesses',
      icon: <BusinessIcon style={{ width: '30px', height: '30px' }} />,
      researchAreas: [
        {
          label: 'Impact',
          name: 'impact',
          description:
            "Contains individual business' data on impact due to COVID-19",
        },
        {
          label: 'Need',
          name: 'need',
          description:
            'Contains individual business data on immediate needs like loans, HHS training, funding, etc.',
        },
        {
          label: 'Preparedness',
          name: 'preparedness',
          description:
            'Contains individual business data on how prepared businesses are to mitigate impacts caused due to COVID-19 like implementation of HHS measures, strategic actions with stakeholders, etc.',
        },
        {
          label: 'Outlook',
          name: 'outlook',
          description:
            'Contains individual business data on how the COVID-19 situation will be in the future like earnings, management, support, etc.',
        },
      ],
    },
    workers: {
      name: 'workers',
      label: 'Workforce',
      icon: <PeopleAltIcon style={{ width: '30px', height: '30px' }} />,
      researchAreas: [
        {
          label: 'Impact',
          name: 'impact',
          description:
            'Contains individual worker data on impact due to COVID-19 like migration, COVID-19 infection, pay cut-off, etc.',
        },
        {
          label: 'Need',
          name: 'need',
          description:
            'Contains individual worker data about measures to mitigate the impact caused by COVID-19.',
        },
        {
          label: 'Preparedness',
          name: 'preparedness',
          description:
            'Contains individual worker data on savings, alternate sources of income, etc.',
        },
        {
          label: 'Outlook',
          name: 'outlook',
          description:
            'Contains individual worker data on challenges for resumption, expected time range for everything to come back to normal and so on.',
        },
      ],
    },
  };

  const [metaStatus, setMetaStatus] = useState({
    businesses: {
      impact: false,
      need: false,
      preparedness: false,
      outlook: false,
    },
    workers: {
      impact: false,
      need: false,
      preparedness: false,
      outlook: false,
    },
  });

  const [checkedStatus, setCheckedStatus] = useState({
    businesses: {
      impact: false,
      need: false,
      preparedness: false,
      outlook: false,
    },
    workers: {
      impact: false,
      need: false,
      preparedness: false,
      outlook: false,
    },
  });

  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const openSnackbar = () => {
    setSnackbarOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };

  const onMetaStatusChange = (surveyArea, researchArea) =>
    setMetaStatus({
      ...metaStatus,
      [surveyArea]: {
        ...metaStatus[surveyArea],
        [researchArea]: !metaStatus[surveyArea][researchArea],
      },
    });

  const onCheckboxChange = (surveyArea, researchArea) =>
    setCheckedStatus({
      ...checkedStatus,
      [surveyArea]: {
        ...checkedStatus[surveyArea],
        [researchArea]: !checkedStatus[surveyArea][researchArea],
      },
    });

  const onSurveyAreaCheckedChange = (surveyArea, checkedState) => {
    const tempState = checkedStatus;
    Object.keys(tempState).forEach(sArea => {
      if (sArea === surveyArea) {
        Object.keys(tempState[sArea]).forEach(
          rArea => (tempState[sArea][rArea] = checkedState),
        );
      }
    });
    setCheckedStatus(prevStatus => ({ ...prevStatus, ...tempState }));
  };

  const handleDownloadClick = () => {
    const businessFlag = Object.values(checkedStatus.businesses).includes(true);
    const workersFlag = Object.values(checkedStatus.workers).includes(true);
    const activeBusinessAreas = Object.keys(checkedStatus.businesses).filter(
      rArea => checkedStatus.businesses[rArea],
    );
    const businessString = activeBusinessAreas
      .map(i => `business_${i}`)
      .toString();
    const activeWorkersAreas = Object.keys(checkedStatus.workers).filter(
      rArea => checkedStatus.workers[rArea],
    );
    const workersString = activeWorkersAreas
      .map(i => `workforce_${i}`)
      .toString();
    if (!businessFlag && !workersFlag) {
      openSnackbar();
    } else {
      window.open(
        `http://178.128.59.143:4000/api/v1/download/bulk/?types=${businessString}${businessString &&
          workersString &&
          ','}${workersString}`,
        '_self',
      );
    }
  };

  const getTotalSelections = () => {
    const businessTotal = Object.values(checkedStatus.businesses).reduce(
      (a, item) => a + (item === true ? 1 : 0),
      0,
    );
    const workersTotal = Object.values(checkedStatus.workers).reduce(
      (a, item) => a + (item === true ? 1 : 0),
      0,
    );
    return businessTotal + workersTotal;
  };

  return (
    <div className="container py-5">
      <Paper elevation={3} style={{ padding: '3rem' }}>
        <div className="d-flex justify-content-between align-items-center">
          <Typography variant="h5">Select dataset(s)</Typography>
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={handleDownloadClick}
          >
            Download{' '}
            {(Object.values(checkedStatus.businesses).includes(true) ||
              Object.values(checkedStatus.workers).includes(true)) && (
              <Chip
                size="small"
                label={getTotalSelections()}
                style={{ marginLeft: '0.5rem', background: '#E9C46A' }}
              />
            )}
          </Button>
        </div>
        <Typography
          variant="body1"
          style={{ color: '#696969', marginTop: '0.5rem' }}
        >
          Select dataset(s) that you would like to download from the checklist
          below and click on the 'download' button.
        </Typography>
        <Divider style={{ marginTop: '1rem', background: 'rgb(93 85 85)' }} />
        {Object.keys(headers).map(sArea => (
          <div className="row" key={uid(sArea)}>
            <div className="col-12 pb-3 mt-4">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Object.keys(checkedStatus[sArea]).every(
                      k => checkedStatus[sArea][k],
                    )}
                    name={headers[sArea].name}
                    onChange={e =>
                      onSurveyAreaCheckedChange(e.target.name, e.target.checked)
                    }
                    color="primary"
                    style={{ marginRight: '1rem' }}
                  />
                }
                label={
                  <span className="pl-3 d-flex align-items-end">
                    {headers[sArea].icon}
                    <div className="label">{headers[sArea].label}</div>
                  </span>
                }
              />
            </div>
            {headers[sArea].researchAreas.map(rArea => (
              <div className="col-12 indent pb-4" key={uid(rArea)}>
                <FormControlLabel
                  classes={{ root: classes.formLabel }}
                  control={
                    <Checkbox
                      checked={checkedStatus[sArea][rArea.name]}
                      onChange={() => onCheckboxChange(sArea, rArea.name)}
                      name="checkedB"
                      color="primary"
                      style={{ marginRight: '1rem' }}
                    />
                  }
                  label={
                    <div>
                      <div className="sub-label">{rArea.label}</div>
                      <div className="label-description">
                        {rArea.description}
                      </div>
                    </div>
                  }
                />
                <div style={{ marginLeft: '3rem' }}>
                  <Button
                    style={{ color: '#696969' }}
                    onClick={() => onMetaStatusChange(sArea, rArea.name)}
                  >
                    {metaStatus[sArea][rArea.name]
                      ? 'Hide table information'
                      : 'Show table information'}
                  </Button>
                </div>
                {metaStatus[sArea][rArea.name] && (
                  <div className="meta-table-container">
                    <MetaTable
                      tableName={`${
                        sArea === 'businesses' ? 'business' : 'workforce'
                      }${rArea.label}`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </Paper>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="info">
          Select dataset(s) that you would like to download first.
        </Alert>
      </Snackbar>
    </div>
  );
}

DownloadView.propTypes = {};

export default memo(DownloadView);
