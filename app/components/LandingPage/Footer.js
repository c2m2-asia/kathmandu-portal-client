/**
 *
 * About
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import FooterAccordion from './FooterAccordion';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LanguageIcon from '@material-ui/icons/Language';

function Footer() {
  return (
    <>
      <section
        className="py-5"
        style={{
          background: '#33475b',
          color: 'white',
          fontSize: '13px',
        }}
      >
        <div className="container">
          <Hidden smDown>
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
                  {`This portal was produced as part of the Cities' COVID
                  Mitigation Mapping Program. The Cities&apos; COVID Mitigation
                  Mapping (C2M2) program is part of the MapGive Initiative in
                  the Office of the Geographer at the U.S. Department of State
                  that builds partnerships to enhance geospatial capacity,
                  generate data, and share maps to support planning for
                  mitigating COVID-19 second order impacts. We acknowledge the
                  many partners who make this a successful program.`}
                </Typography>
              </div>
              <div className="col-2 offset-md-2">
                <Typography variant="h6" gutterBottom align="left">
                  Portal Links
                </Typography>
                <Link to="/stories" className="footer-link">
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
                <a
                  href="https://storymaps.arcgis.com/stories/e5727482aa3c431e8c001b97a5c81934"
                  className="footer-link"
                  target="_blank"
                >
                  <Typography style={{ fontSize: '14px' }} gutterBottom>
                    Story Map
                  </Typography>
                </a>
              </div>
            </div>
          </Hidden>
          <Hidden mdUp>
            <FooterAccordion />
          </Hidden>
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
    </>
  );
}

Footer.propTypes = {};

export default Footer;
