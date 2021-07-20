/**
 *
 * MapInsightsView
 *
 */

import React, { useState, Fragment, memo, useEffect } from 'react';
import { uid } from 'react-uid';
import clsx from 'clsx';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import HeatMap from 'components/HeatMap/Loadable';
import Typography from '@material-ui/core/Typography';
import './styles.css';
import mapInsight from 'images/map-insight-1.png';
import ZoomImage from 'components/StoryDetailView/ZoomImage';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const locale = 'en';

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

function MapInsightsView({ getMapData, mapData }) {
  const classes = useStyles();
  const [selectedHighlight, setSelectedHighlight] = useState('');
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [timeIndex, setTimeIndex] = useState(1);

  useEffect(() => {
    getMapData(timeIndex);
  }, [timeIndex]);

  useEffect(() => {
    if (mapData) setSelectedHighlight(Object.keys(mapData.highlights)[0]);
  }, [mapData]);

  const heatMapData =
    mapData &&
    mapData.distribution[selectedHighlight] &&
    mapData.distribution[selectedHighlight][selectedOptionIndex].geometries;

  return (
    <div
      style={{
        background: '#f5f7fc',
        paddingBottom: '2rem',
        padding: '1rem',
      }}
    >
      <Paper elevation={1} style={{ padding: '1rem' }}>
        {mapData && (
          <Grid
            container
            style={
              {
                // background: '#0B5C76',
                // height: 'calc(100vh - 65px)',
                // padding: '2rem',
              }
            }
          >
            <Grid
              item
              xs={12}
              sm={4}
              lg={4}
              style={{
                paddingRight: '1rem',
                height: 'calc((100vh - 4rem) - 90px)',
                overflowY: 'auto',
              }}
            >
              {researchAreas.map((researchArea, index) => (
                <div
                  key={uid(researchArea, index)}
                  style={{ marginBottom: '2rem' }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{
                      paddingLeft: '1rem',
                      color: 'rgba(0,0,0,0.5)',
                    }}
                  >
                    {researchArea}
                  </Typography>
                  {Object.keys(mapData.highlights).map(highlight => (
                    <Fragment key={uid(highlight)}>
                      {mapData.highlights[highlight].group ===
                        researchArea.toLowerCase() && (
                        <Typography
                          variant="body1"
                          gutterBottom
                          className={clsx(
                            selectedHighlight === highlight &&
                              classes.activeInsight,
                            classes.insights,
                          )}
                          onClick={() => {
                            setSelectedHighlight(highlight);
                            setSelectedOptionIndex(0);
                          }}
                        >
                          {mapData.highlights[highlight].highlights.en}
                        </Typography>
                      )}
                    </Fragment>
                  ))}
                </div>
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
                  height: 'calc(100vh - 4rem - 90px)',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ flexGrow: '1' }}>
                  <HeatMap
                    setTimeIndex={setTimeIndex}
                    timeIndex={timeIndex}
                    heatMapData={heatMapData}
                  />
                </div>
                <div>
                  <div className="bottom-controls">
                    {mapData.distribution[selectedHighlight] &&
                      mapData.distribution[selectedHighlight].map(
                        (options, index) => (
                          <div
                            role="button"
                            key={uid(options, index)}
                            className={`controls ${
                              selectedOptionIndex === index
                                ? ''
                                : 'controls-shadow'
                            }`}
                            onClick={() => setSelectedOptionIndex(index)}
                          >
                            <Typography
                              style={{
                                whiteSpace: 'nowrap',
                                fontSize: '2.5rem',
                              }}
                              className={`${
                                selectedOptionIndex === index
                                  ? 'active-control-text'
                                  : 'control-text'
                              }`}
                            >
                              {options.percoftotal}%
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              className={`${
                                selectedOptionIndex === index
                                  ? 'active-control-text'
                                  : 'control-text'
                              }`}
                              style={{ fontSize: '1.1rem', lineHeight: '1.2' }}
                            >
                              {options.label[locale]}
                            </Typography>
                          </div>
                        ),
                      )}
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        )}
      </Paper>
      {mapData && (
        <Paper
          elevation={1}
          style={{
            padding: '1rem',
            margin: '1rem',
            width: '50%',
            marginTop: '3rem',
            marginBottom: '3rem',
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            style={
              {
                // color: 'rgba(0,0,0,0.5)',
              }
            }
          >
            Distribution of respondents by occupation and district
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ lineHeight: '1.2', color: 'rgba(0,0,0,0.5)' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            non quis exercitationem culpa nesciunt nihil aut nostrum.
          </Typography>
          <ZoomImage src="map-insight-1.png" />
        </Paper>
      )}
    </div>
  );
}

MapInsightsView.propTypes = {
  getMapData: PropTypes.func.isRequired,
  mapData: PropTypes.object,
};

export default memo(MapInsightsView);
