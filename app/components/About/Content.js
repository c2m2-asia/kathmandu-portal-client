import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ExecutiveSummary from './ExecutiveSummary';
import AboutProject from './AboutProject';
import Survey from './Survey';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    overflow: 'visible',
  },
  tab: {
    whiteSpace: 'nowrap'
  },
  selectedTab: {
    fontWeight: '600',
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab
          label="Executive Summary"
          {...a11yProps(0)}
          classes={{ root: classes.tab, selected: classes.selectedTab }}
        />
        <Tab
          label="Survey"
          {...a11yProps(1)}
          classes={{ selected: classes.selectedTab }}
        />
        <Tab
          label="About"
          {...a11yProps(2)}
          classes={{ selected: classes.selectedTab }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ExecutiveSummary />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Survey />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AboutProject />
      </TabPanel>
    </div>
  );
}
