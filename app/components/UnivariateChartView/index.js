/**
 *
 * UnivariateChartView
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
import UnivariateControlsBar from 'components/UnivariateControlsBar/Loadable';
import CrosstabHeatMap from 'components/CrosstabHeatMap';
import CrosstabTable from 'components/CrosstabTable/Loadable';
import DimensionTable from 'components/DimensionTable/Loadable';
import Skeleton from '@material-ui/lab/Skeleton';
import CrosstabHeatmapContainer from 'components/CrosstabHeatmapContainer';
import UnivariateBarChart from 'components/UnivariateBarChart/Loadable';
import UnivariateBarChartContainer from 'components/UnivariateBarChartContainer/Loadable';

import SurveyAreaSelector from './SurveyAreaSelector';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const dimensions = {
  businesses: [
    { label: 'Type', value: 'type' },
    { label: 'Employee size', value: 'employeeSize' },
    { label: 'Operating for', value: 'operatingFor' },
    { label: 'Area', value: 'area' },
    { label: 'Sector', value: 'sector' },
  ],
  workforce: [
    { label: 'Gender', value: 'm_gender' },
    { label: 'Experience', value: 'm_years_of_experience' },
    { label: 'Education level', value: 'm_edu_levl' },
    { label: 'Age', value: 'm_age' },
  ],
};

function UnivariateChartView({ getUnivariateData, univariateData, loading }) {
  const [surveyArea, setSurveyArea] = useState('businesses');
  const [researchArea, setResearchArea] = useState('impact');
  const [viewType, setViewType] = useState('chart');

  function randomNumber(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
  }

  // const dimensionLabel = dimensions[surveyArea]
  //   .find(a => a.value === dimension)
  //   .label.toLowerCase();

  useEffect(() => {
    setTimeout(() => {
      getUnivariateData(surveyArea, researchArea);
    }, 500);
  }, [surveyArea, researchArea]);

  // const getTotalResponses = () =>
  //   chartData.univariate[0].chart_data.reduce((a, b) => a + b.total, 0);

  console.log('univariateData', univariateData);

  return (
    <Fragment>
      <SurveyAreaSelector
        surveyArea={surveyArea}
        setSurveyArea={setSurveyArea}
      />
      <UnivariateControlsBar
        surveyArea={surveyArea}
        researchArea={researchArea}
        setResearchArea={setResearchArea}
        viewType={viewType}
        setViewType={setViewType}
      />
      <div className="container">
        {univariateData &&
          univariateData.map(chartData => (
            <UnivariateBarChartContainer
              key={uid(chartData)}
              chartData={chartData}
              viewType={viewType}
            />
          ))}
      </div>
    </Fragment>
  );
}

UnivariateChartView.propTypes = {
  getUnivariateData: PropTypes.func.isRequired,
  univariateData: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default memo(UnivariateChartView);
