import React, { useState, Fragment } from 'react';
import clsx from 'clsx';
import { uid } from 'react-uid';
import { NavLink, useLocation, withRouter, Link } from 'react-router-dom';
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
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import { primary } from 'theme';
import logo from 'images/project-logo.jpg';
import SpotlightWalkthrough from 'components/SpotlightWalkthrough';
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
  {
    link: '/about',
    name: 'About',
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
    fontWeight: '400',
  },
  homeBtn: {
    color: '#171512',
    textTransform: 'capitalize',
    fontWeight: '400',
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
    textDecoration: 'none',
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
  activeLink: {
    color: primary,
    fontWeight: '600',
    // textDecoration: 'underline',
  },
}));

function NavBar({
  history,
  onLocaleToggle,
  locale,
  location,
  children,
  dimension,
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };
  const isHomePage = location.pathname === '/';

  const isActiveLink = url => {
    const splitLocation = location.pathname.split('/');
    const splitUrl = url.split('/');
    if (splitLocation[1] === splitUrl[1]) return true;
    return false;
  };

  const showHowToUseButton = () => {
    const splitLocation = location.pathname.split('/');
    if (
      splitLocation[splitLocation.length - 1] === 'chart-insights' ||
      splitLocation[splitLocation.length - 1] === 'map-insights'
    ) {
      return true;
    }
    return false;
  };

  const getViewUrl = () => {
    const splitLocation = location.pathname.split('/');
    return splitLocation[splitLocation.length - 1];
  };

  return (
    <Fragment>
      <AppBar
        position="static"
        elevation={0}
        style={{
          borderBottom: `${
            isHomePage ? 'none' : '1px solid rgba(105,105,105,0.33)'
          }`,
          background: '#ffffff',
          paddingTop: '10px',
          paddingBottom: '10px',
        }}
      >
        <Toolbar>
          {
            // <div className={classes.title}>
            //   <NavLink to="/" className={classes.noDecoration}>
            //     <Typography
            //       variant="h4"
            //       className={classes.projectTitle}
            //       display="inline"
            //       style={{ color: primary }}
            //     >
            //       C2M2&nbsp;
            //     </Typography>
            //     <Typography
            //       variant="h4"
            //       className={classes.projectTitle}
            //       display="inline"
            //       style={{ color: 'rgb(64 60 54)' }}
            //     >
            //       KATHMANDU
            //     </Typography>
            //   </NavLink>
            // </div>
          }
          {
            <div className={classes.title}>
              <Link to="/">
                <img height="65" src={logo} alt="C2M2 Kathmandu project logo" />
              </Link>
            </div>
          }
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
              {showHowToUseButton() && (
                <SpotlightWalkthrough
                  dimension={dimension}
                  viewUrl={getViewUrl()}
                />
              )}
              {menuItems.map(menuItem => (
                <NavLink
                  key={uid(menuItem)}
                  to={menuItem.link}
                  className={classes.noDecoration}
                >
                  <Button
                    className={clsx(
                      classes.homeBtn,
                      isActiveLink(menuItem.link) && classes.activeLink,
                    )}
                  >
                    {menuItem.name}
                  </Button>
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
      {children}
    </Fragment>
  );
}
export default withRouter(NavBar);
