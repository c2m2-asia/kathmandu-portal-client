import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import storyMaps from 'images/story-maps.svg';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import './styles.css';

function StoryMap() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <Typography variant="h5" gutterBottom style={{ marginTop: '3rem' }}>
            Story Maps
          </Typography>
          <div className="title-shape mb-5 mt-2" />

          <Typography
            className="mt-5"
            variant="parapgraph"
            gutterBottom
            display="block"
            style={{
              fontSize: '18px',
              marginBottom: '1.5rem',
            }}
          >
            {`View our story map where we tell remarkable COVID-19 story in Nepal
            with maps.`}
          </Typography>
          <a
            href="https://storymaps.arcgis.com/stories/e5727482aa3c431e8c001b97a5c81934"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowRightAltIcon />}
            >
              View Story Maps
            </Button>
          </a>
        </div>
        <div className="col-12 col-md-6">
          <img
            className="storymap-svg"
            src={storyMaps}
            alt="Story Maps Illustration"
          />
        </div>
      </div>
    </div>
  );
}

StoryMap.propTypes = {};

export default StoryMap;
