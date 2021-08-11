/**
 *
 * About
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
import BusinessesTable from './BusinessesTable';
import WorkforceTable from './WorkforceTable';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function Survey() {
  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-8">
          <Typography variant="h5" gutterBottom>
            Businesses Survey
          </Typography>
          <div className="title-shape mb-3 mt-2" />
          <Typography
            variant="paragraph"
            gutterBottom
            display="block"
            style={{
              color: '#333f57',
              fontSize: '17px',
            }}
          >
            For the purpose of the survey, we categorized the businesses into
            nine major categories based on the type of services they provide or
            products they sell. We also took in account the different types of
            sub-sectors that have significant contribution to GDP. The nine
            categories, with total response counts, are as follows:
          </Typography>
          <BusinessesTable />

          <Typography
            variant="paragraph"
            gutterBottom
            display="block"
            style={{
              color: '#333f57',
              fontSize: '17px',
            }}
          >
            Through the survey response, there are also options to categorize
            businesses based on: number of years in operation, number of
            employees and type of associations they are a part of. All these
            data are available for download in the Downloads section.
          </Typography>
        </div>
        {/* / / / Workforce Survey / / / */}
        <div className="col-12 col-sm-8">
          <Typography variant="h5" gutterBottom style={{ marginTop: '5rem' }}>
            Workforce Survey
          </Typography>
          <div className="title-shape mb-3 mt-2" />
          <Typography
            paragraph
            gutterBottom
            display="block"
            style={{
              color: '#333f57',
              fontSize: '17px',
              marginBottom: '1.5rem',
            }}
          >
            For the purpose of the survey, we categorized the tourism workforce
            in seventeen different categories. We decided on these categories
            based on secondary research and extensive consultation with
            stakeholders, including with C2M2 tourism's advisor. The extensive
            list, along with the survey response numbers, is in the following
            table:
          </Typography>
          <WorkforceTable />

          <Typography
            paragraph
            gutterBottom
            display="block"
            style={{
              color: '#333f57',
              fontSize: '17px',
              marginBottom: '1.5rem',
            }}
          >
            As could be seen in the table, a large proportion of the survey
            respondents are tour and trekking guides. This could be largely
            because of the networks KLL relied on to mobilize the survey.
            However, it could also be due to other factors including the
            seasonality of the profession and guides having multiple
            professions. The professions listed here are primary professions.
          </Typography>
        </div>
      </div>
    </>
  );
}

Survey.propTypes = {};

export default Survey;
