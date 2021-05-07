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
// import Typography from '@material-ui/core/Typography';
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

// const useStyles = makeStyles(theme => ({
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
//   },
//   img: {
//     width: '100%',
//     height: 'auto',
//     marginBottom: 8,
//   },
//   card: {
//     boxShadow: theme.shadows[2],
//   },
//   noDecoration: {
//     textDecoration: 'none !important',
//   },
//   title: {
//     transition: theme.transitions.create(['background-color'], {
//       duration: theme.transitions.duration.complex,
//       easing: theme.transitions.easing.easeInOut,
//     }),
//     cursor: 'pointer',
//     color: theme.palette.secondary.main,
//     '&:hover': {
//       color: theme.palette.secondary.dark,
//     },
//     '&:active': {
//       color: theme.palette.primary.dark,
//     },
//   },
//   link: {
//     transition: theme.transitions.create(['background-color'], {
//       duration: theme.transitions.duration.complex,
//       easing: theme.transitions.easing.easeInOut,
//     }),
//     cursor: 'pointer',
//     color: theme.palette.primary.main,
//     '&:hover': {
//       color: theme.palette.primary.dark,
//     },
//   },
//   showFocus: {
//     '&:focus span': {
//       color: theme.palette.secondary.dark,
//     },
//   },
// }));

function StoriesListView() {
  // const classes = useStyles();

  return (
    <div className="container py-5">
      <Blog posts={stories} />
      {
        //   <div style={{ display: 'flex', gap: '4rem', flexDirection: 'column' }}>
        //   {['Hello', 'Kera'].map((dummy, index) => (
        //     <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}>
        //       <div style={{ order: `${index % 2 === 1 ? '1' : '0'}` }}>
        //         <img src={portersImg} style={{ width: '100%', height: 'auto' }} />
        //       </div>
        //       <div>
        //         <Link
        //           to="/stories/stories-detail"
        //           className={classes.noDecoration}
        //           style={{ color: 'inherit' }}
        //         >
        //           <Typography variant="h4" gutterBottom>
        //             <b>Tourism sector workers lose livelihoods</b>
        //           </Typography>
        //         </Link>
        //         <div
        //           style={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}
        //         >
        //           <Typography variant="subtitle1" gutterBottom>
        //             John Doe
        //           </Typography>
        //           <Typography variant="subtitle1" gutterBottom>
        //             <b>&#8226;</b>
        //           </Typography>
        //           <Typography variant="subtitle1" gutterBottom>
        //             March 21, 201
        //           </Typography>
        //         </div>
        //         <Typography variant="subtitle1" gutterBottom>
        //           Wise busy past both park when an ye no. Nay likely her length
        //           sooner thrown sex lively income. The expense windows adapted
        //           sir. Wrong widen drawn ample eat off doors money. Offending
        //           belonging promotion provision an be oh consulted ourselves it.
        //           Blessing welcomed ladyship she met humoured sir breeding her.
        //           Six curiosity day assurance bed necessary.
        //         </Typography>
        //         <Link
        //           to="/stories/stories-detail"
        //           className={classes.noDecoration}
        //           style={{ color: 'inherit' }}
        //         >
        //           <Typography variant="subtitle2" gutterBottom>
        //             Continue reading <ArrowRightAltIcon />
        //           </Typography>
        //         </Link>
        //       </div>
        //     </div>
        //   ))}
        // </div>
      }
    </div>
  );
}

StoriesListView.propTypes = {};

export default memo(StoriesListView);
