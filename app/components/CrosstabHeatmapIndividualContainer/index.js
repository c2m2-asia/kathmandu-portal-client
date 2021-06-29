/**
 *
 * CrosstabHeatmapIndividualContainer
 *
 */

import React, { useState, Fragment, memo } from 'react';
import PropTypes from 'prop-types';
import { uid } from 'react-uid';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import GetAppIcon from '@material-ui/icons/GetApp';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CrosstabHeatMap from 'components/CrosstabHeatMap';
import CrosstabTable from 'components/CrosstabTable/Loadable';
import Skeleton from '@material-ui/lab/Skeleton';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function CrosstabHeatmapIndividualContainer({
  chartData,
  loading,
  viewType,
  element,
}) {
  const [isShowPercentage, setIsShowPercentagesChecked] = useState(true);

  const getTotalResponses = question =>
    question.chart_data.reduce((a, b) => a + b.total, 0);

  return (
    <Paper elevation={1} style={{ marginBottom: '2rem', position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          right: '2rem',
          padding: '1rem',
          background: '#E9C46A',
        }}
      >
        <Typography variant="body2" style={{ color: 'white' }}>
          Updated 28 June, 2021
        </Typography>
      </div>
      <div style={{ padding: '2rem' }}>
        <Typography variant="body2" color="primary">
          QUESTION
        </Typography>
        <Typography variant="h6" gutterBottom style={{ width: '50%' }}>
          {element.ques_en}
        </Typography>
        {
          //   <Typography variant="body1" gutterBottom color="textPrimary">
          //   Showing {getTotalResponses(element)} responses
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

        {loading && (
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexDirection: 'column',
            }}
          >
            {['a', 'b', 'c', 'd'].map(el => (
              <div
                key={uid(el)}
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

        {viewType === 'chart' ? (
          <CrosstabHeatMap
            chartData={element}
            isShowPercentage={isShowPercentage}
          />
        ) : (
          <CrosstabTable chartData={element} />
        )}
      </div>
    </Paper>
  );
}

CrosstabHeatmapIndividualContainer.propTypes = {
  chartData: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  viewType: PropTypes.string.isRequired,
};

export default memo(CrosstabHeatmapIndividualContainer);
