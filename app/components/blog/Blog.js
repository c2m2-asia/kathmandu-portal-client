import React from 'react';
import { uid } from 'react-uid';
import PropTypes from 'prop-types';
import { Grid, Box, isWidthUp, withWidth, withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import BlogCard from './BlogCard';

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
  },
  noDecoration: {
    textDecoration: 'none !important',
  },
});

function getVerticalBlogPosts(width, blogPosts) {
  const gridRows = [[], [], []];
  let rows;
  let xs;
  if (isWidthUp('md', width)) {
    rows = 3;
    xs = 4;
  } else if (isWidthUp('sm', width)) {
    rows = 2;
    xs = 6;
  } else {
    rows = 1;
    xs = 12;
  }

  blogPosts.forEach((blogPost, index) => {
    gridRows[index % rows].push(
      <Grid key={blogPost.id} item xs={12}>
        <Box mb={3}>
          <BlogCard
            src={blogPost.src}
            title={blogPost.title}
            snippet={blogPost.snippet}
            date={blogPost.date}
            url={`/stories/${blogPost.id}`}
          />
        </Box>
      </Grid>,
    );
  });
  return gridRows.map((element, index) => (
    <Grid key={uid(element, index)} item xs={xs}>
      {element}
    </Grid>
  ));
}

function Blog(props) {
  const { classes, width, posts, header } = props;

  return (
    <>
      <Box display="flex" justifyContent="center" className={classes.wrapper}>
        <div className={classes.blogContentWrapper}>
          {header && (
            <>
              <Typography
                variant="h5"
                gutterBottom
                style={{ fontWeight: '700' }}
              >
                {header}
              </Typography>
              <div className="title-shape mb-5 mt-2" />
            </>
          )}
          <Grid container spacing={3}>
            {getVerticalBlogPosts(width, posts)}
          </Grid>
        </div>
      </Box>
    </>
  );
}

Blog.propTypes = {
  // selectBlog: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object),
};

export default withWidth()(withStyles(styles, { withTheme: true })(Blog));
