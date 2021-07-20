/**
 *
 * ChartInsightsView
 *
 */

import React, { useEffect, memo, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DimensionBarChart from 'components/DimensionBarChart';
import Typography from '@material-ui/core/Typography';
import GetAppIcon from '@material-ui/icons/GetApp';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ControlsBar from 'components/ControlsBar/Loadable';
import DimensionTable from 'components/DimensionTable/Loadable';
import CrosstabHeatmapContainer from 'components/CrosstabHeatmapContainer';
import DimensionBarChartSkeleton from 'components/DimensionBarChartSkeleton/Loadable';
import Paper from '@material-ui/core/Paper';

import SurveyAreaSelector from './SurveyAreaSelector';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import './styles.css';

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

const ChartInsightsView = ({ getChartData, chartData, loading }) => {
  const [surveyArea, setSurveyArea] = useState('workforce');
  const [isShowPercentage, setIsShowPercentagesChecked] = useState(true);
  const [researchArea, setResearchArea] = useState('impact');
  const defaultDimension =
    surveyArea === 'businesses' ? 'm_biz_type' : 'm_years_of_experience';
  const [dimension, setDimension] = useState(defaultDimension);
  const [viewType, setViewType] = useState('chart');

  const dimensionLabel = dimensions[surveyArea]
    .find(a => a.value === dimension)
    .label.toLowerCase();

  useEffect(() => {
    setTimeout(() => {
      getChartData(surveyArea, researchArea, dimension);
    }, 500);
  }, [surveyArea, researchArea, dimension]);

  const getTotalResponses = () =>
    chartData.univariate[0].chart_data.reduce((a, b) => a + b.total, 0);

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
      <div style={{ backgroundColor: '#264653' }}>
        <div
          className="container"
          style={{ paddingTop: '3rem', paddingBottom: '3rem' }}
        >
          <Paper
            elevation={2}
            style={{ padding: '2rem', marginBottom: '1rem', marginTop: '1rem' }}
          >
            {loading && <DimensionBarChartSkeleton />}
            {!loading && chartData && (
              <Fragment>
                <Typography variant="h6" gutterBottom>
                  Distribution of {surveyArea} survey respondents by{' '}
                  {dimensionLabel}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Showing {getTotalResponses()} responses
                </Typography>
                <div
                  style={{
                    display: 'flex',
                    gap: '1.2rem',
                    alignItems: 'center',
                    marginTop: '1.5rem',
                  }}
                >
                  <Link
                    to="/chart-insights/#"
                    style={{ textDecoration: 'none' }}
                  >
                    <div style={{ display: 'flex', gap: '0.3rem' }}>
                      <GetAppIcon color="primary" />
                      <Typography
                        variant="body2"
                        gutterBottom
                        color="textPrimary"
                      >
                        Download this data
                      </Typography>
                    </div>
                  </Link>
                  {viewType === 'chart' && (
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          checked={isShowPercentage}
                          onChange={() =>
                            setIsShowPercentagesChecked(!isShowPercentage)
                          }
                          name="checkedB"
                        />
                      }
                      label={
                        <Typography variant="body2" gutterBottom>
                          Show in percentages
                        </Typography>
                      }
                    />
                  )}
                </div>

                {viewType === 'chart' ? (
                  <DimensionBarChart
                    surveyArea={surveyArea}
                    dimension={dimension}
                    chartData={chartData.univariate[0].chart_data}
                    isShowPercentage={isShowPercentage}
                  />
                ) : (
                  <DimensionTable
                    chartData={chartData.univariate[0].chart_data}
                  />
                )}
              </Fragment>
            )}
          </Paper>
        </div>
      </div>
      <CrosstabHeatmapContainer
        chartData={chartData}
        loading={loading}
        viewType={viewType}
        surveyArea={surveyArea}
        researchArea={researchArea}
      />
    </Fragment>
  );
};

ChartInsightsView.propTypes = {
  getChartData: PropTypes.func.isRequired,
  chartData: PropTypes.object,
  loading: PropTypes.bool.isRequired,
};

export default memo(ChartInsightsView);
