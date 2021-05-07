/**
 *
 * VisualizationSelectionView
 *
 */

import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import './styles.css';

function VisualizationSelectionView() {
  return (
    <>
      <Typography
        variant="subtitle1"
        gutterBottom
        style={{ textAlign: 'center', marginTop: '3rem', fontWeight: '600' }}
      >
        Select one to proceed
      </Typography>
      <div className="selections-container">
        <Link to="/chart-insights">
          <div
            className="insight-container"
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <div className="insight-selection chart-selection chart-img-holder">
              <h5 style={{ fontSize: '2rem', padding: '2rem' }}>
                COVID-19 AND KATHMANDU’S TOURISM INDUSTRY IN CHARTS
              </h5>
            </div>
          </div>
        </Link>

        <Link to="/map-insights">
          <div
            className="insight-container"
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <div className="insight-selection map-selection map-img-holder">
              <h5 style={{ fontSize: '2rem', padding: '2rem' }}>
                COVID-19 AND KATHMANDU’S TOURISM INDUSTRY IN MAPS
              </h5>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

VisualizationSelectionView.propTypes = {};

export default memo(VisualizationSelectionView);
