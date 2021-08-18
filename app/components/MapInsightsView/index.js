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
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';
import { primary } from 'theme';
import StaticMaps from './StaticMaps';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const locale = 'en';

const researchAreas = ['Impact', 'Need', 'Preparedness', 'Outlook'];

function MapInsightsView({ getMapData, mapData }) {
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
          {!mapData &&
            <CircularProgress />
          }
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
                  height: '800px',
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
                style={{ height: '100%', width: '100%', paddingLeft: '1.5rem' }}
              >
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div className="map-step">
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
                    <HeatMap
                      setTimeIndex={setTimeIndex}
                      timeIndex={timeIndex}
                      heatMapData={heatMapData}
                    />
                  </div>
                </div>
              </Grid>
            </Grid>
          )}
        </Paper>

        {/* Static maps...*/}
        {mapData && (
          <>
            <StaticMaps />
          </>
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
