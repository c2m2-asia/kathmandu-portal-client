/**
 *
 * LandingPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import NavBar from 'components/NavBar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { primary } from 'theme';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
// import heroImg from 'images/rickshaw.jpg';
import Blog from 'components/blog/Blog';
import stories from 'components/dummy_data/stories';
import GetAppIcon from '@material-ui/icons/GetApp';
import heroImg from 'images/before-after.png';
import questionnaire from 'images/questionnaire.svg';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import BusinessIcon from '@material-ui/icons/Business';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import PersonIcon from '@material-ui/icons/Person';
import Partners from './Partners';
import StoryMap from './StoryMap';
import Footer from './Footer';
import Carousel from './Carousel';

import './styles.css';

function LandingPage() {
  return (
    <NavBar>
      <section className="hero py-5" style={{ background: '#ffffff' }}>
        <div className="container" style={{ position: 'relative' }}>
          <div className="d-flex desc-container">
            <div className="w-50 project-desc" style={{ padding: '2rem' }}>
              <Typography variant="h1">
                COVID-19
                <br />
                AND ITS IMPACT ON
                <br />
                NEPALESE TOURISM
              </Typography>
              <Typography
                paragraph
                style={{
                  color: 'white',
                  paddingRight: '20%',
                  marginTop: '1.5rem',
                  fontSize: '20px',
                  letterSpacing: '.16px',
                }}
              >
                Helping tourism stakeholders expedite the revival of tourism and
                restoration of the livelihoods associated with it.
              </Typography>
            </div>
            <div className="w-50 img-container">
              <img
                src={heroImg}
                className="container-img"
                alt="richshaw driver sleeping in front of closed stores"
              />
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
              Stories from the Ground
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
              Deep Dive Into Data
            </Typography>
            <div className="title-shape mb-5 mt-2" />
          </div>
          <Blog posts={stories.slice(4, 7)} />
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

      <section className="py-5" style={{ background: '#264653' }}>
        <div className="container">
          <div className="d-flex flex-column align-items-center">
            <Typography
              variant="h5"
              gutterBottom
              style={{
                color: 'white',
                textAlign: 'center',
              }}
            >
              Our Data Sources
            </Typography>
            <div className="data-shape mb-5 mt-2" />
          </div>
          <div className="d-flex justify-content-around">
            <div>
              <PersonIcon
                className="mb-3"
                style={{ height: '60px', width: 'auto', color: 'white' }}
              />
              <Typography
                variant="h3"
                style={{
                  color: 'white',
                  fontWeight: '700',
                }}
              >
                250+
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                style={{
                  color: 'white',
                  fontWeight: '500',
                }}
              >
                Tourism
                <br />
                workers
              </Typography>
            </div>
            <div>
              <BusinessIcon
                className="mb-3"
                style={{ height: '60px', width: 'auto', color: 'white' }}
              />
              <Typography
                variant="h3"
                style={{
                  color: 'white',
                  fontWeight: '700',
                }}
              >
                100+
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                style={{
                  color: 'white',
                  fontWeight: '500',
                }}
              >
                Tourism
                <br />
                businesses
              </Typography>
            </div>
            <div>
              <QuestionAnswerIcon
                style={{ height: '60px', width: 'auto', color: 'white' }}
                className="mb-3"
              />
              <Typography
                variant="h3"
                style={{
                  color: 'white',
                  fontWeight: '700',
                }}
              >
                10+
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                style={{
                  color: 'white',
                  fontWeight: '500',
                }}
              >
                In-person
                <br />
                interviews
              </Typography>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-5" style={{ background: '#264653' }}>
        <div className="container">
          <StoryMap />
        </div>
      </section>

      <section className="py-5" style={{ background: '#f5f7fc' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <img
                className="questionnaire-svg"
                src={questionnaire}
                alt="survey SVG"
              />
            </div>
            <div className="col-12 col-md-6 mt-5">
              <Typography
                variant="h5"
                gutterBottom
                style={{
                  color: '#333f57',
                }}
              >
                Official Questionnaire
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

              <div style={{ display: 'flex', gap: '1rem' }}>
                <a
                  href="https://raw.githubusercontent.com/c2m2-asia/share-survey-businesses/main/COVID-19%20and%20Tourism%20Businesses%20-%20A%20survey%20for%20assessing%20COVID%20impact%2C%20your%20current%20needs%20and%20future%20plans.pdf"
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<GetAppIcon />}
                    size="large"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    Businesses
                  </Button>
                </a>
                <a
                  href="https://raw.githubusercontent.com/c2m2-asia/share-survey/main/COVID-19%20and%20Tourism%20Workers%20-%20English%20-%20A%20Survey%20to%20Assess%20COVID%20Impact%2C%20Your%20Current%20Needs%20and%20Future%20Plans.pdf"
                  style={{ textDecoration: 'none', marginLeft: '1.5rem' }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<GetAppIcon />}
                    size="large"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    Workforce
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-5" style={{ background: '#f5f7fc' }}>
        <div className="container">
          <Partners />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </NavBar>
  );
}

LandingPage.propTypes = {};

export default LandingPage;
