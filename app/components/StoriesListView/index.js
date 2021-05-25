/**
 *
 * StoriesListView
 *
 */

import React, { memo } from 'react';
import clsx from 'clsx';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
// import portersImg from 'images/porters.jpg';
// import sampleImg from 'images/sample-img.jpg';
// import mapInsights from 'images/map-insights.png';
// import { Card, Box, Grid } from '@material-ui/core';
import Blog from 'components/blog/Blog';
import stories from 'components/dummy_data/stories';
import { PRIMARY_COLOR } from 'utils/constants';
// import messages from './messages';
// import { FormattedMessage } from 'react-intl';

// const useStyles = theme => ({
//   blogContentWrapper: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(4),
//       marginRight: theme.spacing(4),
//     },
//     maxWidth: 1280,
//     width: '100%',
//   },
//   wrapper: {
//     minHeight: '60vh',
//     overflow: 'hidden',
//   },
//   noDecoration: {
//     textDecoration: 'none !important',
//   },
// });

function StoriesListView() {
  // const classes = useStyles();
  const pstories = stories.slice(0, 4);
  const reports = stories.slice(4, 7);

  return (
    <div className="bg-white">
      <div className="container py-5">
        <Blog posts={pstories} header="Stories from the ground" />
        <div className="mt-5">
          <Blog posts={reports} header="Survey results" />
        </div>
      </div>
    </div>
  );
}

StoriesListView.propTypes = {};

export default memo(StoriesListView);
