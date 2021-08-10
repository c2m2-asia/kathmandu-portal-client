/**
 *
 * About
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import NavBar from 'components/NavBar';
import Content from './Content';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function About() {
  return (
    <NavBar>
      <div className="container mt-5">
        <Content />
      </div>
    </NavBar>
  );
}

About.propTypes = {};

export default About;
