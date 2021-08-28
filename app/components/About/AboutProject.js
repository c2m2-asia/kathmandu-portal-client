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
            Cities’ COVID Mitigation Mapping (C2M2) is a field-based program of
            the Office of the Geographer at the U.S. Department of State.
          </Typography>

          <Typography
            paragraph
            gutterBottom
            style={{
              color: '#333f57',
              fontSize: '17px',
            }}
          >
            The Cities' COVID Mitigation Mapping (C2M2) program is part of the
            MapGive Initiative in the Office of the Geographer at the U.S.
            Department of State that builds partnerships to enhance geospatial
            capacity, generate data, and share maps to support planning for
            mitigating COVID-19 second order impacts. We acknowledge the many
            partners who make this a successful program.
          </Typography>
          <Typography
            paragraph
            gutterBottom
            style={{
              color: '#333f57',
              fontSize: '17px',
            }}
          >
            The views and opinions expressed in this web portal are those of the
            authors and do not necessarily reflect the official policy or
            position of any agency of the U.S. government. Assumptions made
            within the analysis are not a reflection of the position of any U.S.
            government entity.
          </Typography>
        </div>
      </div>
    </>
  );
}

AboutProject.propTypes = {};

export default AboutProject;
