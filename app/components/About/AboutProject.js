/**
 *
 * About
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function AboutProject() {
  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-8">
          <Typography variant="h5" gutterBottom>
            About this Project
          </Typography>
          <div className="title-shape mb-3 mt-2" />
          <Typography
            paragraph
            gutterBottom
            style={{
              color: '#333f57',
              fontSize: '17px',
            }}
          >
            This portal is a part of C2M2-Kathmandu (Cities’ COVID Mitigation
            Mapping) project. Its overall goal is to help tourism stakeholders
            expedite the revival of tourism and restoration of the livelihoods
            associated with it.
          </Typography>
          <Typography
            paragraph
            gutterBottom
            style={{
              color: '#333f57',
              fontSize: '17px',
            }}
          >
            It aims to do so by collecting latest data from field, and then
            putting them in a consolidated narrative that helps these
            stakeholders understand and communicate the present impact,
            preparedness and needs of tourism workforce and businesses.
          </Typography>
          <Typography
            paragraph
            gutterBottom
            style={{
              color: '#333f57',
              fontSize: '17px',
            }}
          >
            C2M2-Kathmandu is a part of C2M2 Global project.
          </Typography>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-sm-8">
          <Typography variant="h5" gutterBottom style={{ marginTop: '5rem' }}>
            About C2M2 Global Project
          </Typography>
          <div className="title-shape mb-3 mt-2" />
          <Typography
            paragraph
            gutterBottom
            style={{
              color: '#333f57',
              fontSize: '17px',
              marginBottom: '1.5rem',
            }}
          >
            C2M2 Global is an international project to assess the second-order
            impacts of COVID-19 on different aspects of livelihood. This project
            is currently running in 12 cities across Latin America, Africa and
            Asia.
          </Typography>

          <Typography
            paragraph
            gutterBottom
            style={{
              color: '#333f57',
              fontSize: '17px',
            }}
          >
            This project is implemented by AAG (American Association of
            Geographers), and supported by the U.S. Department of State's
            MapGive initiative.
          </Typography>
        </div>
      </div>
    </>
  );
}

AboutProject.propTypes = {};

export default AboutProject;
