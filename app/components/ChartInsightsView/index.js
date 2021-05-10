/**
 *
 * ChartInsightsView
 *
 */

import React, { useEffect, memo, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { uid } from 'react-uid';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import DimensionBarChart from 'components/DimensionBarChart';
import Typography from '@material-ui/core/Typography';
import GetAppIcon from '@material-ui/icons/GetApp';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ControlsBar from 'components/ControlsBar/Loadable';
import CrosstabHeatMap from 'components/CrosstabHeatMap';
import CrosstabTable from 'components/CrosstabTable/Loadable';
import DimensionTable from 'components/DimensionTable/Loadable';
import SurveyAreaSelector from './SurveyAreaSelector';
import Skeleton from '@material-ui/lab/Skeleton';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import './styles.css';

const dimensions = {
  businesses: [
    { label: 'Type', value: 'type' },
    { label: 'Employee size', value: 'employeeSize' },
    { label: 'Operating for', value: 'operatingFor' },
    { label: 'Area', value: 'area' },
    { label: 'Sector', value: 'sector' },
  ],
  workforce: [
    { label: 'Sector', value: 'sector' },
    { label: 'Experience', value: 'experience' },
    { label: 'Education level', value: 'm_edu_levl' },
  ],
};

const ChartInsightsView = ({ getChartData, chartData, loading }) => {
  const [surveyArea, setSurveyArea] = useState('workforce');
  const [isShowPercentage, setIsShowPercentagesChecked] = useState(true);
  const [researchArea, setResearchArea] = useState('Impact');
  const defaultDimension = surveyArea === 'businesses' ? 'type' : 'm_edu_levl';
  const [dimension, setDimension] = useState(defaultDimension);
  const [viewType, setViewType] = useState('chart');

  function randomNumber(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
  }

  const dimensionLabel = dimensions[surveyArea]
    .find(a => a.value === dimension)
    .label.toLowerCase();

  useEffect(() => {
    setTimeout(() => {
      getChartData(researchArea, dimension);
    }, 500);
  }, []);

  return (
    <Fragment>
      <SurveyAreaSelector
        surveyArea={surveyArea}
        setSurveyArea={setSurveyArea}
        setDimension={setDimension}
        defaultDimension={defaultDimension}
      />
      <ControlsBar
        surveyArea={surveyArea}
        researchArea={researchArea}
        setResearchArea={setResearchArea}
        dimension={dimension}
        setDimension={setDimension}
        viewType={viewType}
        setViewType={setViewType}
      />
      <div style={{ background: '#0A546B' }}>
        <div
          className="container"
          style={{ paddingTop: '3rem', paddingBottom: '3rem' }}
        >
          <Typography variant="h6" gutterBottom>
            Distribution of responses by {dimensionLabel}
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            Showing 322 responses
          </Typography>
          <div
            style={{
              display: 'flex',
              gap: '1.2rem',
              alignItems: 'center',
              marginTop: '1.5rem',
            }}
          >
            <Link style={{ textDecoration: 'none' }}>
              <div style={{ display: 'flex', gap: '0.3rem' }}>
                <GetAppIcon style={{ color: 'rgba(255,255,255,0.5)' }} />
                <Typography variant="body2" gutterBottom>
                  Download this data
                </Typography>
              </div>
            </Link>
            {viewType === 'chart' && (
              <FormControlLabel
                control={
                  <Checkbox
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                    checked={isShowPercentage}
                    onChange={() =>
                      setIsShowPercentagesChecked(!isShowPercentage)
                    }
                    name="checkedB"
                    color="primary"
                  />
                }
                label={
                  <Typography variant="body2" gutterBottom>
                    Show percentages?
                  </Typography>
                }
              />
            )}
          </div>
          {loading && (
            <div style={{ display: 'flex', gap: '1rem' }}>
              {['', '', '', ''].map(() => (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    alignSelf: 'flex-end',
                  }}
                >
                  <Skeleton
                    animation="wave"
                    variant="rect"
                    width="9vw"
                    height={randomNumber(30, 220)}
                  />
                  <Skeleton animation="wave" variant="text" width="6vw" />
                </div>
              ))}
            </div>
          )}

          {chartData && !loading && (
            <Fragment>
              {viewType === 'chart' ? (
                <DimensionBarChart
                  surveyArea={surveyArea}
                  dimension={dimension}
                  chartData={chartData.univariate}
                  isShowPercentage={isShowPercentage}
                />
              ) : (
                <DimensionTable chartData={chartData.univariate} />
              )}
            </Fragment>
          )}
        </div>
      </div>
      <div style={{ background: '#0B5C76' }}>
        <div
          className="container"
          style={{ paddingTop: '3rem', paddingBottom: '3rem' }}
        >
          <Typography variant="h6" gutterBottom>
            If the situation persists, what will be your biggest challenge in
            the next six months?
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            Showing 322 responses
          </Typography>
          <div
            style={{
              display: 'flex',
              gap: '1.2rem',
              alignItems: 'center',
              marginTop: '1.5rem',
            }}
          >
            <Link style={{ textDecoration: 'none' }}>
              <div style={{ display: 'flex', gap: '0.2rem' }}>
                <GetAppIcon style={{ color: 'rgba(255,255,255,0.5)' }} />
                <Typography variant="body2" gutterBottom>
                  Download this data
                </Typography>
              </div>
            </Link>
            {viewType === 'chart' && (
              <FormControlLabel
                control={
                  <Checkbox
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                    checked={isShowPercentage}
                    onChange={() =>
                      setIsShowPercentagesChecked(!isShowPercentage)
                    }
                    name="checkedB"
                    color="primary"
                  />
                }
                label={
                  <Typography variant="body2" gutterBottom>
                    Show percentages?
                  </Typography>
                }
              />
            )}
          </div>
          {loading && (
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                flexDirection: 'column',
              }}
            >
              {['', '', '', ''].map(() => (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                >
                  <Skeleton
                    animation="wave"
                    variant="rect"
                    width="50vw"
                    height={85}
                  />
                  <Skeleton animation="wave" variant="text" width="6vw" />
                </div>
              ))}
            </div>
          )}

          {!loading && chartData && (
            <Fragment>
              {viewType === 'chart' ? <CrosstabHeatMap /> : <CrosstabTable />}
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};

ChartInsightsView.propTypes = {
  getChartData: PropTypes.func.isRequired,
  chartData: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default memo(ChartInsightsView);
