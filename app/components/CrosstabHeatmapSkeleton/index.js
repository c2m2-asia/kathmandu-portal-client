/**
 *
 * CrosstabHeatmapSkeleton
 *
 */

import React, { Fragment, memo } from 'react';
import { uid } from 'react-uid';
import Skeleton from '@material-ui/lab/Skeleton';

function CrosstabHeatmapSkeleton() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

CrosstabHeatmapSkeleton.propTypes = {};

export default memo(CrosstabHeatmapSkeleton);
