/**
 *
 * UnivariateChartView
 *
 */

import React, { useEffect, memo, Fragment, useState } from 'react';
import { uid } from 'react-uid';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import UnivariateControlsBar from 'components/UnivariateControlsBar/Loadable';

import CrosstabHeatmapSkeleton from 'components/CrosstabHeatmapSkeleton/Loadable';
import UnivariateBarChartContainer from 'components/UnivariateBarChartContainer/Loadable';

import SurveyAreaSelector from './SurveyAreaSelector';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function UnivariateChartView({ getUnivariateData, univariateData, loading }) {
  const [surveyArea, setSurveyArea] = useState('businesses');
  const [researchArea, setResearchArea] = useState('impact');
  const [viewType, setViewType] = useState('chart');

  useEffect(() => {
    setTimeout(() => {
      getUnivariateData(surveyArea, researchArea);
    }, 500);
  }, [surveyArea, researchArea]);

  // const getTotalResponses = () =>
  //   chartData.univariate[0].chart_data.reduce((a, b) => a + b.total, 0);

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
        {loading &&
          ['a', 'b'].map(el => <CrosstabHeatmapSkeleton key={uid(el)} />)}
        {!loading &&
          univariateData &&
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
