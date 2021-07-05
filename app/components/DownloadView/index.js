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
            "Contains individual business' data on need due to COVID-19",
        },
        {
          label: 'Preparedness',
          name: 'preparedness',
          description:
            "Contains individual business' data on preparedness due to COVID-19",
        },
        {
          label: 'Outlook',
          name: 'outlook',
          description:
            "Contains individual business' data on outlook due to COVID-19",
        },
      ],
    },
    workers: {
      name: 'workers',
      label: 'Workers',
      icon: <PeopleAltIcon style={{ width: '30px', height: '30px' }} />,
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
            "Contains individual business' data on need due to COVID-19",
        },
        {
          label: 'Preparedness',
          name: 'preparedness',
          description:
            "Contains individual business' data on preparedness due to COVID-19",
        },
        {
          label: 'Outlook',
          name: 'outlook',
          description:
            "Contains individual business' data on outlook due to COVID-19",
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
    if (!businessFlag && !workersFlag) {
      openSnackbar();
    } else {
      alert('Coming soon...');
    }
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
            Download
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
                    <MetaTable tableName={`${sArea}${rArea.label}`} />
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
