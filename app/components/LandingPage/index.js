/**
 *
 * LandingPage
 *
 */

import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
// import { Link } from 'react-router-dom';
import blob from 'images/blob.svg';
import { primary } from 'theme';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import './styles.css';
import Blog from 'components/blog/Blog';
import stories from 'components/dummy_data/stories';
import Carousel from './Carousel';

function LandingPage() {
  return (
    <Fragment>
      <section className="hero">
        <div className="container" style={{ display: 'flex' }}>
          <div className="title" style={{ marginTop: '6rem' }}>
            <Typography
              variant="h1"
              style={{
                textTransform: 'uppercase',
                lineHeight: '120%',
                whiteSpace: 'no-wrap',
                fontSize: '8rem',
                fontWeight: '600',
              }}
            >
              Nepal
            </Typography>
            <Typography
              variant="h1"
              style={{
                textTransform: 'uppercase',
                lineHeight: '120%',
                whiteSpace: 'no-wrap',
                fontSize: '8rem',
                fontWeight: '600',
              }}
            >
              tourism
            </Typography>
            <Typography
              variant="h1"
              style={{
                textTransform: 'uppercase',
                lineHeight: '120%',
                whiteSpace: 'no-wrap',
                fontSize: '8rem',
                fontWeight: '600',
              }}
            >
              in covid-19
            </Typography>
          </div>
          <div className="blob">
            <img width="500" src={blob} />
          </div>
        </div>
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '2rem',
            gap: '5rem',
            marginTop: '10rem',
          }}
        >
          <div>
            What has been its extent of{' '}
            <span style={{ color: primary, fontWeight: '600' }}>IMPACT</span>?
          </div>
          <div>
            What is their levels of{' '}
            <span style={{ color: primary, fontWeight: '600' }}>
              PREPAREDNESS?
            </span>
          </div>
          <div>
            What{' '}
            <span style={{ color: primary, fontWeight: '600' }}>NEEDS</span>{' '}
            exist on the ground?
          </div>
        </div>
      </section>

      <section className=" pt-5 pb-5" style={{ background: '#f5f7fc' }}>
        <div className="container">
          <div className="d-flex flex-column align-items-center">
            <Typography
              variant="h6"
              gutterBottom
              style={{
                color: '#333f57',
                textAlign: 'center',
              }}
            >
              From the ground
            </Typography>
            <div className="title-shape mb-5" />
          </div>
          <Blog posts={stories.slice(0, 3)} />
        </div>
      </section>

      <section className="bg-white pt-5 pb-5">
        <div className="container">
          <div className="d-flex flex-column align-items-center">
            <Typography
              variant="h6"
              gutterBottom
              style={{
                color: '#333f57',
                textAlign: 'center',
              }}
            >
              Testimonial
            </Typography>
            <div className="title-shape mb-5" />
          </div>
          <Carousel />
        </div>
      </section>
    </Fragment>
  );
}

LandingPage.propTypes = {};

export default LandingPage;
