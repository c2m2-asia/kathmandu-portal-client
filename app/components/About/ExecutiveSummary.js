/**
 *
 * ExecutiveSummary
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function ExecutiveSummary() {
  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-7">
          <Typography variant="h5" gutterBottom>
            Executive Summary
          </Typography>
          <div className="title-shape mb-5 mt-2" />
          <Typography
            variant="paragraph"
            gutterBottom
            display="block"
            style={{
              color: '#333f57',
              fontSize: '17px',
            }}
          >
            Kathmandu Living Labs has been working to document the effects of
            the COVID-19 pandemic, as felt by tourism industry in Nepal. Over
            the course of a year, we have interacted with hundreds of
            stakeholders from diverse sector of the tourism industry. This
            portal includes data, charts, stories, and related resources from
            the project activities and other relevant sources to provide a
            comprehesive understanding on the second order impact of COVID-19 in
            Nepal&apsos;s tourism industry.{' '}
          </Typography>
          <Typography
            variant="paragraph"
            gutterBottom
            display="block"
            style={{
              color: '#333f57',
              fontSize: '17px',
            }}
          >
            We met with individuals working in tourism, individuals who own or
            used to own tourism-related businesses, and individuals working for
            the sector’s recovery in some capacity (government officials, etc.).
            We listened to them, and gathered information around their lived
            experience, through informal interviews, through focused group
            discussions, and through surveys. When doing this, we focused on the
            economic and psychosocial impacts that the pandemic has had on them.
            We also tried to capture their needs for the next few months, in the
            hope that this information would be useful for future decisions made
            for the industry.
          </Typography>
          <Typography
            variant="paragraph"
            gutterBottom
            display="block"
            style={{
              color: '#333f57',
              fontSize: '17px',
            }}
          >
            While some of the data found is grim (for instance, majority of the
            survey have lost their jobs and fear the subsequent waves would hit
            even harder), there are also rays of hope. The survey findings and
            the stories from the ground also reveal the tremendous resilience of
            the tourism stakeholders, which points to their ability to bounce
            back once the situation resumes to some normalcy. Said that, the
            findings also point to a need of support from the government and
            policymakers. These findings and charts could be viewed in the
            Charts and Maps sections of the Visualizations tab. Similarly, there
            is also an option to download the data and conduct independent
            analysis for those interested to draw other insights from the survey
            data. The data is available in the Downloads section.
          </Typography>{' '}
          <Typography
            variant="paragraph"
            gutterBottom
            display="block"
            style={{
              color: '#333f57',
              fontSize: '17px',
            }}
          >
            We hope the information in this portal would be useful to a diverse
            stakeholders including lobbyists, decision-makers, and well-wishers
            of the tourism industry, as they take next steps to mitigate the
            effects, and support the recovery of a very important sector in
            Nepal. Once again, we would like to thank all those who have
            actively participated and contributed to make this initiative a
            reality.
          </Typography>
        </div>
      </div>
    </>
  );
}

ExecutiveSummary.propTypes = {};

export default ExecutiveSummary;
