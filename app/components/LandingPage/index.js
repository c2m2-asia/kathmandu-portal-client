/**
 *
 * LandingPage
 *
 */

import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import blob from 'images/blob.svg';
import { primary } from 'theme';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import heroImg from 'images/rickshaw.jpg';
import './styles.css';
import Blog from 'components/blog/Blog';
import stories from 'components/dummy_data/stories';
import Carousel from './Carousel';
import GetAppIcon from '@material-ui/icons/GetApp';
import questionnaire from 'images/questionnaire.svg';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

function LandingPage() {
  return (
    <Fragment>
      <section className="hero py-5" style={{ background: '#ffffff' }}>
        <div className="container" style={{ position: 'relative' }}>
          <div className="d-flex desc-container">
            <div className="w-50 project-desc" style={{ padding: '2rem' }}>
              <Typography variant="h1">
                Nepal
                <br />
                Tourism in
                <br />
                COVID-19
              </Typography>
              <Typography
                paragraph
                style={{
                  color: 'rgba(255,255,255,0.75)',
                  paddingRight: '30%',
                  marginTop: '1.5rem',
                  fontSize: '20px',
                  letterSpacing: '.24px',
                }}
              >
                Helping tourism stakeholders expedite the revival of tourism and
                restoration of the livelihoods associated with it.
              </Typography>
            </div>
            <div className="w-50 img-container">
              <img src={heroImg} className="container-img" />
            </div>
          </div>
          <div className="research-areas">
            <div>
              What has been its <br />
              extent of{' '}
              <span style={{ color: primary, fontWeight: '600' }}>IMPACT</span>?
            </div>
            <div>
              What is their levels
              <br /> of{' '}
              <span style={{ color: primary, fontWeight: '600' }}>
                PREPAREDNESS?
              </span>
            </div>
            <div>
              What{' '}
              <span style={{ color: primary, fontWeight: '600' }}>NEEDS</span>{' '}
              exist <br />
              on the ground?
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pt-5" style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <div className="d-flex flex-column align-items-center">
            <Typography
              variant="h5"
              gutterBottom
              style={{
                color: '#333f57',
                textAlign: 'center',
              }}
            >
              Testimonial
            </Typography>
            <div className="title-shape mb-5 mt-2" />
          </div>
          <Carousel />
        </div>
      </section>

      <section className="py-5" style={{ background: '#f5f7fc' }}>
        <div className="container">
          <div className="d-flex flex-column align-items-center">
            <Typography
              variant="h5"
              gutterBottom
              style={{
                color: '#333f57',
                textAlign: 'center',
              }}
            >
              From the ground
            </Typography>
            <div className="title-shape mb-5 mt-2" />
          </div>
          <Blog posts={stories.slice(0, 3)} />
          <div className="mt-4" style={{ textAlign: 'center' }}>
            <Link to="/stories" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowRightAltIcon />}
              >
                View all stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-5" style={{ background: '#f5f7fc' }}>
        <div className="container">
          <div className="d-flex">
            <div className="w-50">
              <img src={questionnaire} width="400" />
            </div>
            <div className="w-50 mt-5">
              <Typography
                variant="h5"
                gutterBottom
                style={{
                  color: '#333f57',
                }}
              >
                Official questionnaire
              </Typography>
              <div className="title-shape mb-5 mt-2" />
              <Typography
                paragraph
                gutterBottom
                style={{
                  color: '#333f57',
                  fontSize: '18px',
                  marginBottom: '1.5rem',
                }}
              >
                You can download the official questionnaires that were used for
                gathering information from businesses and workforce.
              </Typography>

              <Link to="/stories" style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<GetAppIcon />}
                  size="large"
                >
                  Businesses
                </Button>
              </Link>
              <Link
                to="/stories"
                style={{ textDecoration: 'none', marginLeft: '1.5rem' }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<GetAppIcon />}
                  size="large"
                >
                  Workforce
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" style={{ background: '#f5f7fc' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', margin: 'auto' }}>
            <div className="d-flex flex-column align-items-center">
              <Typography
                variant="h5"
                gutterBottom
                style={{
                  color: '#333f57',
                  textAlign: 'center',
                }}
              >
                About the project
              </Typography>
              <div className="title-shape mb-5  mt-2" />
            </div>
            <Typography
              paragraph
              gutterBottom
              style={{
                color: '#333f57',
                textAlign: 'center',
              }}
            >
              The Cities’ COVID Mitigation Mapping program (C2M2) builds on
              global networks of geospatial experts to analyze second-order
              impacts of COVID-19. The goal of this program is to increase
              identification and understanding of the distribution and gaps in
              resources available to vulnerable populations in urban
              communities.
            </Typography>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

LandingPage.propTypes = {};

export default LandingPage;
