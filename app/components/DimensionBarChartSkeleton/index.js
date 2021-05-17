/**
 *
 * DimensionBarChartSkeleton
 *
 */

import React, { Fragment, memo } from 'react';
import { uid } from 'react-uid';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Skeleton from '@material-ui/lab/Skeleton';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function DimensionBarChartSkeleton() {
  function randomNumber(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
  }
  return (
    <Fragment>
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

      <div style={{ display: 'flex', gap: '1rem' }}>
        {['d', 'c', 'b', 'a'].map(item => (
          <div
            key={uid(item)}
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
    </Fragment>
  );
}

DimensionBarChartSkeleton.propTypes = {};

export default memo(DimensionBarChartSkeleton);
