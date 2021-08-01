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
import NavBar from 'components/NavBar';
import HeatMap from 'components/HeatMap/Loadable';
import Typography from '@material-ui/core/Typography';
import './styles.css';
import mapInsight from 'images/map-insight-1.png';
import ZoomImage from 'components/StoryDetailView/ZoomImage';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import { primary } from 'theme';

const locale = 'en';

const useStyles = makeStyles(theme => ({
  insights: {
    cursor: 'pointer',
    borderRadius: '5px',
    paddingLeft: '1rem',
    paddingRight: '0.5rem',
    wordBreak: 'keep-all',
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
    paddingTop: '0.3rem',
    paddingBottom: '0.3rem',
  },
}));

const researchAreas = ['Impact', 'Need', 'Preparedness', 'Outlook'];

function MapInsightsView({ getMapData, mapData }) {
  const classes = useStyles();
  const [selectedHighlight, setSelectedHighlight] = useState('');
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [timeIndex, setTimeIndex] = useState(2);

  useEffect(() => {
    getMapData(timeIndex);
  }, [timeIndex]);

  useEffect(() => {
    if (mapData && !selectedHighlight) {
      setSelectedHighlight(Object.keys(mapData.highlights)[0]);
    }
  }, [mapData]);

  const heatMapData =
    mapData &&
    mapData.distribution[selectedHighlight] &&
    mapData.distribution[selectedHighlight][selectedOptionIndex].geometries;

  return (
    <NavBar>
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
                sm={3}
                lg={3}
                style={{
                  paddingRight: '2rem',
                  overflowY: 'auto',
                  height: 'calc(100vh - 160px)',
                }}
                className="highlights-step"
              >
                {researchAreas.map((researchArea, index) => (
                  <div
                    key={uid(researchArea, index)}
                    style={{ marginBottom: '2rem' }}
                    className="impact-step"
                  >
                    <Typography
                      variant="h6"
                      gutterBottom
                      style={{
                        paddingLeft: '1rem',
                        color: primary,
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
                            className={`${
                              selectedHighlight === highlight
                                ? 'highlight-selected'
                                : 'highlight'
                            } ${
                              selectedHighlight === highlight
                                ? 'selected-highlight'
                                : ''
                            }`}
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
                sm={9}
                lg={9}
                style={{ height: '100%', width: '100%' }}
              >
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div className="map-step">
                    <HeatMap
                      setTimeIndex={setTimeIndex}
                      timeIndex={timeIndex}
                      heatMapData={heatMapData}
                    />
                  </div>
                  <div>
                    <div className="bottom-controls options-step">
                      {mapData.distribution[selectedHighlight] &&
                        mapData.distribution[selectedHighlight].map(
                          (options, index) => (
                            <div
                              role="button"
                              key={uid(options, index)}
                              className={`controls ${
                                selectedOptionIndex === index
                                  ? 'selected-option'
                                  : ''
                              }`}
                              onClick={() => setSelectedOptionIndex(index)}
                            >
                              <Typography
                                style={{
                                  whiteSpace: 'nowrap',
                                  fontSize: '2rem',
                                }}
                                className={`${
                                  selectedOptionIndex === index
                                    ? 'active-option-text'
                                    : 'option-text'
                                }`}
                              >
                                {options.percoftotal}%
                              </Typography>
                              <Typography
                                variant="subtitle1"
                                className={`${
                                  selectedOptionIndex === index
                                    ? 'active-option-text'
                                    : 'option-text'
                                }`}
                                style={{
                                  fontSize: '1.1rem',
                                  lineHeight: '1.2',
                                }}
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

        {/* Static maps...*/}
        {mapData && (
          <Paper
            elevation={1}
            style={{
              padding: '1rem',
              width: '50%',
              marginTop: '3rem',
              marginBottom: '3rem',
            }}
            className="static-map-step"
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
            <ZoomImage
              src="map-insight-1.png"
              alt="Distribution of respondents by occupation and district C2M2 Kathmandu"
            />
          </Paper>
        )}
      </div>
    </NavBar>
  );
}

MapInsightsView.propTypes = {
  getMapData: PropTypes.func.isRequired,
  mapData: PropTypes.object,
};

export default memo(MapInsightsView);
