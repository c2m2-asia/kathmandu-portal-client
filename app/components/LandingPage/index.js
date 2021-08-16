/**
 *
 * LandingPage
 *
 */

import React, { Fragment } from 'react';
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
import heroImg from 'images/before-after.png';

import './styles.css';
import Blog from 'components/blog/Blog';
import stories from 'components/dummy_data/stories';
import GetAppIcon from '@material-ui/icons/GetApp';
import questionnaire from 'images/questionnaire.svg';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import BusinessIcon from '@material-ui/icons/Business';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LanguageIcon from '@material-ui/icons/Language';
import Partners from './Partners';
import StoryMap from './StoryMap';

import Carousel from './Carousel';

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
            <div className="col-12 col-lg-6">
              <img src={questionnaire} width="400" alt="survey SVG" />
            </div>
            <div className="col-12 col-lg-6 mt-5">
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

              <a
                href="https://raw.githubusercontent.com/c2m2-asia/share-survey-businesses/main/COVID-19%20and%20Tourism%20Businesses%20-%20A%20survey%20for%20assessing%20COVID%20impact%2C%20your%20current%20needs%20and%20future%20plans.pdf"
                style={{ textDecoration: 'none' }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<GetAppIcon />}
                  size="large"
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
                >
                  Workforce
                </Button>
              </a>
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
      <section
        className="py-5"
        style={{
          background: '#33475b',
          color: 'white',
          fontSize: '13px',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-5">
              <Typography variant="h6" gutterBottom align="left">
                About C2M2
              </Typography>
              <Typography
                paragraph
                align="left"
                style={{ fontSize: '14px', color: '#f4f4f4' }}
              >
                This portal was produced as part of the Cities COVID Mitigation
                Mapping Program. The Cities&apos; COVID Mitigation Mapping
                (C2M2) program is part of the MapGive Initiative in the Office
                of the Geographer at the U.S. Department of State that builds
                partnerships to enhance geospatial capacity, generate data, and
                share maps to support planning for mitigating COVID-19 second
                order impacts. We acknowledge the many partners who make this a
                successful program.
              </Typography>
            </div>
            <div className="col-2 offset-md-2">
              <Typography variant="h6" gutterBottom align="left">
                Portal Links
              </Typography>
              <Link to="/" className="footer-link">
                <Typography style={{ fontSize: '14px' }} gutterBottom>
                  Stories
                </Typography>
              </Link>
              <Link to="/visualizations" className="footer-link">
                <Typography style={{ fontSize: '14px' }} gutterBottom>
                  Visualizations
                </Typography>
              </Link>
              <Link to="/downloads" className="footer-link">
                <Typography style={{ fontSize: '14px' }} gutterBottom>
                  Downloads
                </Typography>
              </Link>
              <Link to="/about" className="footer-link">
                <Typography style={{ fontSize: '14px' }} gutterBottom>
                  About
                </Typography>
              </Link>
            </div>
            <div className="col-2 offset-md-1">
              <Typography variant="h6" gutterBottom align="left">
                Resources
              </Typography>
              <a
                href="https://c2m2-asia.github.io/kathmandu/"
                className="footer-link"
                target="_blank"
              >
                <Typography style={{ fontSize: '14px' }} gutterBottom>
                  Interim Report
                </Typography>
              </a>
              <a
                href="https://github.com/c2m2-asia/kathmandu-data"
                className="footer-link"
                target="_blank"
              >
                <Typography style={{ fontSize: '14px' }} gutterBottom>
                  Data
                </Typography>
              </a>
              <Link to="/" className="footer-link">
                <Typography style={{ fontSize: '14px' }} gutterBottom>
                  Story Map
                </Typography>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-2" style={{ background: '#f5f7fc' }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Typography align="left" variant="subtitle2">
                &copy; Kathmandu Living Labs
              </Typography>
            </div>
            <div>
              <IconButton
                aria-label="delete"
                onClick={() =>
                  window
                    .open('https://www.kathmandulivinglabs.org/', '_blank')
                    .focus()
                }
              >
                <LanguageIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                onClick={() =>
                  window
                    .open(
                      'https://www.facebook.com/kathmandulivinglabs',
                      '_blank',
                    )
                    .focus()
                }
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                onClick={() =>
                  window
                    .open('https://twitter.com/KTMLivingLabs', '_blank')
                    .focus()
                }
              >
                <TwitterIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </section>
    </NavBar>
  );
}

LandingPage.propTypes = {};

export default LandingPage;
