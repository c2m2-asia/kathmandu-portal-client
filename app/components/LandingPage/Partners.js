import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import Typography from '@material-ui/core/Typography';
import kllLogo from 'images/kll-logo.png';
import aagLogo from 'images/aag-logo.png';
import mapGiveLogo from 'images/map-give-logo.png';
import unitravLogo from 'images/unitrav-logo.png';
import taanLogo from 'images/taan-logo.png';
import jottufLogo from 'images/jottuf-logo.png';
import ttdcLogo from 'images/ttdc-logo.png';
import hanLogo from 'images/han-logo.png';
import './styles.css';

function Partners() {
  return (
    <div>
      <div className="mb-4" style={{ display: 'grid', placeContent: 'center' }}>
        <Typography variant="h6" style={{ color: '#696969' }}>
          Implemented by
        </Typography>
        <div style={{ margin: 'auto' }}>
          <img src={kllLogo} width="100" alt="KLL logo" />
        </div>
      </div>
      <div className="mb-4" style={{ display: 'grid', placeContent: 'center' }}>
        <Typography variant="h6" align="center" style={{ color: '#696969' }}>
          Global Partners
        </Typography>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ margin: 'auto' }}>
            <img src={aagLogo} width="140" alt="AAG logo" />
          </div>
          <div style={{ margin: 'auto' }}>
            <img src={mapGiveLogo} height="73" alt="MapGive logo" />
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', placeItems: 'center' }}>
        <div className="partners">
          <div>
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              style={{ color: '#696969' }}
            >
              Businesses Survey Partners
            </Typography>
            <div className="d-flex align-items-center" style={{ gap: '2rem' }}>
              <div style={{ margin: 'auto' }}>
                <a
                  href="https://www.hotelassociationnepal.org.np/"
                  target="_blank"
                >
                  <img src={hanLogo} width="100" alt="HAN logo" />
                </a>
              </div>
              <div style={{ margin: 'auto' }}>
                <a href="https://www.taan.org.np/" target="_blank">
                  <img src={taanLogo} height="65" alt="TAAN logo" />
                </a>
              </div>
              <div style={{ margin: 'auto' }}>
                <a
                  href="https://www.facebook.com/Thamel-Tourism-Development-council-TTDC-1219818868140081/"
                  target="_blank"
                >
                  <img src={ttdcLogo} width="100" alt="TTDC logo" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              style={{ color: '#696969' }}
            >
              Workforce Survey Partners
            </Typography>
            <div className="d-flex align-items-center" style={{ gap: '2rem' }}>
              <div>
                <a href="https://unitrav.org.np/" target="_blank">
                  <img src={unitravLogo} width="100" alt="UNITRAV logo" />
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/jottufnepal/" target="_blank">
                  <img src={jottufLogo} height="65" alt="JOTTUF logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Partners.propTypes = {};

export default Partners;
