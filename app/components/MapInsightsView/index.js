/**
 *
 * MapInsightsView
 *
 */

import React, { useState, Fragment, memo } from 'react';
import { uid } from 'react-uid';
import clsx from 'clsx';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import HeatMap from 'components/HeatMap/Loadable';
import Typography from '@material-ui/core/Typography';
import './styles.css';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const useStyles = makeStyles(theme => ({
  insights: {
    cursor: 'pointer',
    borderRadius: '5px',
    paddingLeft: '1rem',
    paddingRight: '0.5rem',
    '&:hover': {
      transition: 'all .4s ease',
      backgroundColor: '#2A9D8F',
      color: 'white',
      borderRight: '5px solid #4E8EAA',
    },
  },
  activeInsight: {
    backgroundColor: '#2A9D8F',
    color: 'rgba(255,255,255,0.9)',
    borderRight: '5px solid #48A9A6',
  },
}));

const researchAreas = ['Impact', 'Need', 'Preparedness', 'Outlook'];

function MapInsightsView() {
  const classes = useStyles();
  const [selectedIndexControl, setSelectedIndexControl] = useState(1);

  return (
    <Grid
      container
      style={{
        // background: '#0B5C76',
        height: 'calc(100vh - 65px)',
        padding: '2rem',
      }}
    >
      <Grid item xs={12} sm={4} lg={4} style={{ paddingRight: '1rem' }}>
        {researchAreas.map((researchArea, index) => (
          <Fragment key={uid(researchArea, index)}>
            <Typography
              variant="h6"
              gutterBottom
              style={{ paddingLeft: '1rem', color: 'rgba(0,0,0,0.5)' }}
            >
              {researchArea}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              className={clsx(
                index === 1 && classes.activeInsight,
                classes.insights,
              )}
            >
              subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              className={classes.insights}
              style={{ marginBottom: '2rem' }}
            >
              subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </Typography>
          </Fragment>
        ))}
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        lg={8}
        style={{ height: '100%', width: '100%' }}
      >
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ height: '700px' }}>
            <HeatMap />
          </div>
          <div style={{ height: '400px', width: '100%' }}>
            <div className="bottom-controls">
              {researchAreas.map((researchArea, index) => (
                <div
                  key={uid(researchArea, index)}
                  className="controls"
                  role="button"
                  onClick={() => setSelectedIndexControl(index)}
                >
                  <Typography
                    variant="h2"
                    className={`${
                      selectedIndexControl === index
                        ? 'active-control-text'
                        : 'control-text'
                    }`}
                  >
                    8%
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className={`${
                      selectedIndexControl === index
                        ? 'active-control-text'
                        : 'control-text'
                    }`}
                  >
                    more than 20%
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

MapInsightsView.propTypes = {};

export default memo(MapInsightsView);
