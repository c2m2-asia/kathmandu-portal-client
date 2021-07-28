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
import { primary } from 'theme';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import heroImg from 'images/rickshaw.jpg';
import './styles.css';
import Blog from 'components/blog/Blog';
import stories from 'components/dummy_data/stories';
import GetAppIcon from '@material-ui/icons/GetApp';
import questionnaire from 'images/questionnaire.svg';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import BusinessIcon from '@material-ui/icons/Business';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import PersonIcon from '@material-ui/icons/Person';
import kllLogo from 'images/kll-logo.png';
import aagLogo from 'images/aag-logo.png';
import mapGiveLogo from 'images/map-give-logo.png';
import unitravLogo from 'images/unitrav-logo.png';
import taanLogo from 'images/taan-logo.png';
import jottufLogo from 'images/jottuf-logo.png';
import ttdcLogo from 'images/ttdc-logo.png';
import hanLogo from 'images/han-logo.png';

import Carousel from './Carousel';

function LandingPage() {
  return (
    <Fragment>
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
                200+
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

      <section className="bg-white py-5" style={{ background: '#f5f7fc' }}>
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
                href="https://raw.githubusercontent.com/c2m2-asia/share-survey/main/%E0%A4%95%E0%A5%8B%E0%A4%AD%E0%A4%BF%E0%A4%A1-%E0%A5%A7%E0%A5%AF%20%E0%A4%AE%E0%A4%BE%20%E0%A4%A8%E0%A5%87%E0%A4%AA%E0%A4%BE%E0%A4%B2%E0%A5%80%20%E0%A4%AA%E0%A4%B0%E0%A5%8D%E0%A4%AF%E0%A4%9F%E0%A4%A8%20%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A4%AE%E0%A4%BF%E0%A4%95_%20%E0%A4%85%E0%A4%B8%E0%A4%B0%2C%20%E0%A4%A4%E0%A5%88%E0%A4%AF%E0%A4%BE%E0%A4%B0%E0%A5%80%20%E0%A4%B0%20%E0%A4%86%E0%A4%B5%E0%A4%B6%E0%A5%8D%E0%A4%AF%E0%A4%95%E0%A4%A4%E0%A4%BE%E0%A4%95%E0%A5%8B%20%E0%A4%B5%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%81%E0%A4%97%E0%A4%A4%20%E0%A4%A4%E0%A4%A5%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%82%E0%A4%95%20%E0%A4%B8%E0%A4%82%E0%A4%95%E0%A4%B2%E0%A4%A8.pdf"
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
                About the Project
              </Typography>
              <div className="title-shape mb-5 mt-2" />
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
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                marginTop: '2rem',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ display: 'grid', placeContent: 'center' }}>
                <Typography variant="h6">Implemented by</Typography>
                <div style={{ margin: 'auto' }}>
                  <img src={kllLogo} width="100" alt="KLL logo" />
                </div>
              </div>
              <div style={{ display: 'grid', placeContent: 'center' }}>
                <Typography variant="h6" style={{ textAlign: 'center' }}>
                  Global Partners
                </Typography>
                <div
                  style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
                >
                  <div style={{ margin: 'auto' }}>
                    <img src={aagLogo} width="140" alt="AAG logo" />
                  </div>
                  <div style={{ margin: 'auto' }}>
                    <img src={mapGiveLogo} width="150" alt="MapGive logo" />
                  </div>
                </div>
              </div>
              <div style={{ display: 'grid', placeContent: 'center' }}>
                <Typography
                  variant="h6"
                  style={{ textAlign: 'center' }}
                  gutterBottom
                >
                  National Partners
                </Typography>
                <div
                  style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
                >
                  <div style={{ margin: 'auto' }}>
                    <img src={hanLogo} width="100" alt="HAN logo" />
                  </div>
                  <div style={{ margin: 'auto' }}>
                    <img src={ttdcLogo} width="100" alt="TTDC logo" />
                  </div>
                  <div style={{ margin: 'auto' }}>
                    <img src={unitravLogo} width="100" alt="UNITRAV logo" />
                  </div>
                  <div style={{ margin: 'auto' }}>
                    <img src={taanLogo} width="100" alt="TAAN logo" />
                  </div>
                  <div style={{ margin: 'auto' }}>
                    <img src={jottufLogo} width="100" alt="JOTTUF logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section
        className="py-3"
        style={{
          background: '#264653',
          color: 'white',
          fontSize: '13px',
          textAlign: 'center',
        }}
      >
        <div className="container">
          Developed by&nbsp;
          <a
            className="footer-link"
            href="https://www.kathmandulivinglabs.org/"
            target="_blank"
          >
            Kathmandu Living Labs
          </a>
          .&nbsp;Implemented by&nbsp;
          <a className="footer-link" href="http://www.aag.org/">
            American Association of Geographers
          </a>
          .&nbsp;Supported by&nbsp;
          <a className="footer-link" href="https://mapgive.state.gov/">
            U.S. Department of State's MapGive initiative
          </a>
          .
        </div>
      </section>
    </Fragment>
  );
}

LandingPage.propTypes = {};

export default LandingPage;
