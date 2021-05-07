import React, { useState } from 'react';
import { uid } from 'react-uid';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import { Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const menuItems = [
  {
    link: '/',
    name: 'Home',
  },
  {
    link: '/stories',
    name: 'Stories',
  },
  {
    link: '/visualizations',
    name: 'Visualizations',
  },
  {
    link: '/downloads',
    name: 'Downloads',
  },
];

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  button: {
    color: 'white',
    textTransform: 'capitalize',
  },
  buttonMobile: {
    color: 'black',
    textTransform: 'capitalize',
  },
  closeIcon: {
    marginRight: theme.spacing(0.5),
  },
  headSection: {
    width: 200,
  },
  blackList: {
    height: '100%',
  },
  noDecoration: {
    textDecoration: 'none !important',
  },
  menuItemsContainer: {
    display: 'flex',
    gap: '2.5rem',
  },
  menuItemContainerMobile: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
    alignItems: 'center',
  },
  projectTitle: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400,
  },
}));

export default function NavBar({ history, onLocaleToggle, locale }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar
        position="static"
        elevation={0}
        style={{
          borderBottom: '1px solid rgba(105,105,105,0.33)',
          background: '#0B5C76',
        }}
      >
        <Toolbar>
          <div className={classes.title}>
            <Typography
              variant="h4"
              className={classes.projectTitle}
              display="inline"
              style={{ color: '#CAE9FF' }}
            >
              C2M2&nbsp;
            </Typography>
            <Typography
              variant="h4"
              className={classes.projectTitle}
              display="inline"
              style={{ color: '#FCFAF9' }}
            >
              KATHMANDU
            </Typography>
          </div>
          <Hidden mdUp>
            <IconButton
              className={classes.menuButton}
              onClick={() => setOpen(true)}
              aria-label="Open Navigation"
            >
              <MenuIcon color="primary" />
            </IconButton>
          </Hidden>

          <Hidden smDown>
            <div className={classes.menuItemsContainer}>
              {menuItems.map(menuItem => (
                <NavLink
                  key={uid(menuItem)}
                  to={menuItem.link}
                  className={classes.noDecoration}
                >
                  <Button className={classes.button}>{menuItem.name}</Button>
                </NavLink>
              ))}
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>

      <Drawer variant="temporary" open={open} onClose={onClose} anchor="right">
        <Toolbar className={classes.headSection}>
          <ListItem disableGutters>
            <ListItemIcon className={classes.closeIcon}>
              <IconButton onClick={onClose} aria-label="Close Navigation">
                <CloseIcon color="primary" />
              </IconButton>
            </ListItemIcon>
          </ListItem>
        </Toolbar>
        <List className={classes.blackList}>
          <div className={classes.menuItemContainerMobile}>
            {menuItems.map(menuItem => (
              <NavLink
                key={uid(menuItem)}
                to={menuItem.link}
                className={classes.noDecoration}
              >
                <Button
                  className={classes.buttonMobile}
                  onClick={() => setOpen(false)}
                >
                  {menuItem.name}
                </Button>
              </NavLink>
            ))}
          </div>
        </List>
      </Drawer>
    </div>
  );
}
