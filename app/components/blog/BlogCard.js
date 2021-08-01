import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import classNames from "classnames";
import { Button, Typography, Card, Box, withStyles } from '@material-ui/core';

const styles = theme => ({
  img: {
    width: '100%',
    height: 'auto',
    marginBottom: 8,
  },
  card: {
    boxShadow: theme.shadows[2],
  },
  noDecoration: {
    textDecoration: 'none !important',
  },
  title: {
    transition: theme.transitions.create(['background-color'], {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.easeInOut,
    }),
    cursor: 'pointer',
    color: theme.palette.common.black,
    '&:hover': {
      color: theme.palette.secondary.dark,
    },
    '&:active': {
      color: theme.palette.primary.dark,
    },
  },
  link: {
    transition: theme.transitions.create(['background-color'], {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.easeInOut,
    }),
    cursor: 'pointer',
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  showFocus: {
    '&:focus span': {
      color: theme.palette.secondary.dark,
    },
  },
});

function BlogCard(props) {
  const { classes, url, src, date, title, snippet } = props;

  return (
    <Card className={classes.card}>
      {src && (
        <Link to={url} tabIndex={-1}>
          <img src={require(`images/${src}`)} className={classes.img} alt="" />
        </Link>
      )}
      <Box p={2}>
        <Typography variant="body2" color="textSecondary">
          {date}
        </Typography>
        <Link to={url} className={classes.noDecoration}>
          <Typography variant="h6">
            <span className={classes.title}>{title}</span>
          </Typography>
        </Link>
        <Typography variant="body1" color="textPrimary">
          {snippet}
          {
            //   <Link to={url} className={classes.noDecoration} tabIndex={-1}>
            //   <span className={classes.link}> read more...</span>
            // </Link>
          }
        </Typography>
        <Link to={url} className={classes.noDecoration}>
          <Button variant="outlined" color="primary" className="mt-3" size="small">
            Read Story{' '}
          </Button>
        </Link>
      </Box>
    </Card>
  );
}

BlogCard.propTypes = {
  classes: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  snippet: PropTypes.string.isRequired,
  src: PropTypes.string,
};

export default withStyles(styles, { withTheme: true })(BlogCard);