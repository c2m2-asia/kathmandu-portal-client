import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Grid,
  Typography,
  Card,
  Box,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import BlogCard from 'components/blog/BlogCard';
import smoothScrollTop from './smoothScrollTop';
import stories from 'components/dummy_data/stories';
import ZoomImage from './ZoomImage';

import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from 'react-share';
import { EmailIcon, FacebookIcon, TwitterIcon } from 'react-share';

const styles = theme => ({
  blogContentWrapper: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
    maxWidth: 1280,
    width: '100%',
  },
  wrapper: {
    minHeight: '60vh',
    overflow: 'hidden',
    paddingBottom: '2rem',
  },
  // img: {
  //   width: '100%',
  //   height: 'auto',
  // },
  card: {
    boxShadow: theme.shadows[4],
  },
});

function BlogPost(props) {
  const shareUrl = 'http://www.kathmandulivinglabs.org/';
  const {
    classes,
    date,
    title,
    src,
    content,
    otherArticles,
    author,
    photoCourtesy,
  } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.title]);

  return (
    <Box className={classes.wrapper} display="flex" justifyContent="center">
      <div className={classes.blogContentWrapper}>
        <Grid container spacing={5}>
          <Grid item md={9}>
            <Card className={classes.card}>
              <Box pt={3} pr={3} pl={3} pb={2}>
                <Typography variant="h4">
                  <b>{title}</b>
                </Typography>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      className="pt-3"
                    >
                      {author} <br />
                      {date}
                    </Typography>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <Tooltip title="Share on Facebook">
                      <IconButton aria-label="delete" size="small">
                        <FacebookShareButton
                          url={shareUrl}
                          className="emailShareClassname"
                        >
                          <FacebookIcon size={40} round />
                        </FacebookShareButton>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Share on Twitter">
                      <IconButton aria-label="delete" size="small">
                        <TwitterShareButton
                          url={shareUrl}
                          className="emailShareClassname"
                        >
                          <TwitterIcon size={40} round />
                        </TwitterShareButton>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Share by Email">
                      <IconButton aria-label="delete" size="small">
                        <EmailShareButton
                          url={shareUrl}
                          className="emailShareClassname"
                        >
                          <EmailIcon size={40} round />
                        </EmailShareButton>
                      </IconButton>
                    </Tooltip>
                  </div>
                </div>
              </Box>
              <ZoomImage src={src} alt="" />
              <Typography
                variant="caption"
                style={{
                  color: '#696969',
                  float: 'right',
                  marginRight: '0.5rem',
                }}
              >
                Photo Courtesy: {photoCourtesy}
              </Typography>
              <Box p={3}>{content}</Box>
            </Card>
          </Grid>
          <Grid item md={3}>
            {otherArticles.map(blogPost => (
              <Box key={blogPost.id} mb={3}>
                <BlogCard
                  title={blogPost.title}
                  snippet={blogPost.snippet}
                  date={blogPost.date}
                  url={`/stories/${blogPost.id}`}
                />
              </Box>
            ))}
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}

BlogPost.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  otherArticles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles, { withTheme: true })(BlogPost);
