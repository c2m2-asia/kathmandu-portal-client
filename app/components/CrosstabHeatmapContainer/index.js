/**
 *
 * CrosstabHeatmapContainer
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { uid } from 'react-uid';
// import styled from 'styled-components';
import CrosstabHeatmapSkeleton from 'components/CrosstabHeatmapSkeleton/Loadable';
import CrosstabHeatmapIndividualContainer from 'components/CrosstabHeatmapIndividualContainer/Loadable';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function CrosstabHeatmapContainer({
  chartData,
  loading,
  viewType,
  surveyArea,
  researchArea,
}) {
  return (
    <div
      style={{
        background: '#f5f7fc',
        paddingTop: '4rem',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <div className="container">
        {loading && <CrosstabHeatmapSkeleton viewType={viewType} />}
        {!loading &&
          chartData &&
          chartData.bivariate.map(element => (
            <CrosstabHeatmapIndividualContainer
              key={uid(element)}
              chartData={chartData}
              loading={loading}
              viewType={viewType}
              element={element}
              surveyArea={surveyArea}
              researchArea={researchArea}
            />
          ))}
      </div>
    </div>
  );
}

CrosstabHeatmapContainer.propTypes = {
  chartData: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  viewType: PropTypes.string.isRequired,
};

export default memo(CrosstabHeatmapContainer);
