/**
 *
 * CrosstabHeatmapSkeleton
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

function CrosstabHeatmapSkeleton({ viewType, isShowPercentage }) {
  return (
    <div>
      <div style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <Skeleton animation="wave" variant="text" width="45vw" />
        <Skeleton
          animation="wave"
          variant="text"
          width="10vw"
          style={{ marginBottom: '2rem' }}
        />
        <Skeleton
          animation="wave"
          variant="text"
          width="15vw"
          style={{ marginBottom: '2rem' }}
        />

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
      </div>
    </div>
  );
}

CrosstabHeatmapSkeleton.propTypes = {};

export default memo(CrosstabHeatmapSkeleton);
