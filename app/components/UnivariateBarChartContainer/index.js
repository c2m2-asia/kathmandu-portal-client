/**
 *
 * UnivariateBarChartContainer
 *
 */

import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { uid } from 'react-uid';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
// import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import GetAppIcon from '@material-ui/icons/GetApp';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import DimensionTable from 'components/DimensionTable/Loadable';
import UnivariateBarChart from 'components/UnivariateBarChart/Loadable';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const locale = 'en';

const useStyles = makeStyles(theme => ({
  question: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));

function UnivariateBarChartContainer({
  chartData,
  viewType,
  surveyArea,
  researchArea,
}) {
  const classes = useStyles();

  const [isShowPercentage, setIsShowPercentagesChecked] = useState(true);

  const getTotalResponses = question =>
    question.chart_data.reduce((a, b) => a + b.total, 0);

  const onDownload = variable =>
    window.open(
      `http://178.128.59.143:4000/api/v1/download/chart/?type=univariate&survey=${
        surveyArea === 'businesses' ? 'business' : 'workforce'
      }&var_group=${researchArea}&variable=${variable}`,
      '_self',
    );

  return (
    <Paper
      elevation={1}
      style={{ marginBottom: '2rem', position: 'relative' }}
      className="first-univariate-chart-step"
    >
      <div
        style={{
          position: 'absolute',
          right: '2rem',
          padding: '1rem',
          background: '#E9C46A',
        }}
      >
        <Typography
          variant="body2"
          style={{ color: 'white', fontWeight: '600' }}
        >
          Updated 28 June, 2021
        </Typography>
      </div>
      <div style={{ padding: '2rem' }}>
        <Typography variant="body2" color="primary">
          QUESTION
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          className={classes.question}
          color="textPrimary"
        >
          {chartData.ques[locale]}
        </Typography>
        {
          //   <Typography variant="body1" gutterBottom color="textPrimary">
          //   Showing {chartData.askedTotal} responses
          // </Typography>
        }
        <div
          style={{
            display: 'flex',
            gap: '1.2rem',
            alignItems: 'center',
            marginTop: '1.5rem',
          }}
        >
          <div
            role="button"
            style={{ display: 'flex', gap: '0.2rem' }}
            onClick={() => onDownload(chartData.variable)}
          >
            <GetAppIcon color="primary" />
            <Typography variant="body2" gutterBottom color="textPrimary">
              Download this data
            </Typography>
          </div>

          {viewType === 'chart' && (
            <FormControlLabel
              control={
                <Checkbox
                  checked={isShowPercentage}
                  onChange={() =>
                    setIsShowPercentagesChecked(!isShowPercentage)
                  }
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
            locale={locale}
          />
        ) : (
          <DimensionTable chartData={chartData.chart_data} />
        )}
      </div>
    </Paper>
  );
}

UnivariateBarChartContainer.propTypes = {
  chartData: PropTypes.object.isRequired,
  viewType: PropTypes.string.isRequired,
  surveyArea: PropTypes.string.isRequired,
  researchArea: PropTypes.string.isRequired,
};

export default memo(UnivariateBarChartContainer);
