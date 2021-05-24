/**
 *
 * UnivariateBarChartContainer
 *
 */

import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { uid } from 'react-uid';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import GetAppIcon from '@material-ui/icons/GetApp';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DimensionTable from 'components/DimensionTable/Loadable';
import UnivariateBarChart from 'components/UnivariateBarChart/Loadable';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function UnivariateBarChartContainer({ chartData, viewType }) {
  const [isShowPercentage, setIsShowPercentagesChecked] = useState(true);

  const getTotalResponses = question =>
    question.chart_data.reduce((a, b) => a + b.total, 0);

  return (
    <div style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <Typography
        variant="h6"
        gutterBottom
        style={{ width: '50%' }}
        color="textPrimary"
      >
        {chartData.ques_en}
      </Typography>
      <Typography variant="body1" gutterBottom color="textPrimary">
        Showing {getTotalResponses(chartData)} responses
      </Typography>
      <div
        style={{
          display: 'flex',
          gap: '1.2rem',
          alignItems: 'center',
          marginTop: '1.5rem',
        }}
      >
        <Link to="/chart-insights/#" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', gap: '0.2rem' }}>
            <GetAppIcon color="primary" />
            <Typography variant="body2" gutterBottom color="textPrimary">
              Download this data
            </Typography>
          </div>
        </Link>

        {viewType === 'chart' && (
          <FormControlLabel
            control={
              <Checkbox
                checked={isShowPercentage}
                onChange={() => setIsShowPercentagesChecked(!isShowPercentage)}
                name="checkedB"
                color="primary"
              />
            }
            label={
              <Typography variant="body2" gutterBottom color="textPrimary">
                Show in percentages
              </Typography>
            }
          />
        )}
      </div>
      {viewType === 'chart' ? (
        <UnivariateBarChart
          chartData={chartData}
          isShowPercentage={isShowPercentage}
        />
      ) : (
        <DimensionTable chartData={chartData.chart_data} />
      )}
    </div>
  );
}

UnivariateBarChartContainer.propTypes = {
  chartData: PropTypes.object.isRequired,
  viewType: PropTypes.string.isRequired,
};

export default memo(UnivariateBarChartContainer);
