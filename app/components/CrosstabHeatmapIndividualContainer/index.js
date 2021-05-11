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
    <div style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <Typography variant="h6" gutterBottom style={{ width: '50%' }}>
        {element.ques_en}
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        style={{ color: 'rgba(255,255,255,0.45)' }}
      >
        Showing {getTotalResponses(element)} responses
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
                onChange={() => setIsShowPercentagesChecked(!isShowPercentage)}
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
  );
}

CrosstabHeatmapIndividualContainer.propTypes = {
  chartData: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  viewType: PropTypes.string.isRequired,
};

export default memo(CrosstabHeatmapIndividualContainer);
