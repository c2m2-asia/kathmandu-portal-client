import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    fontSize: '13px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accRoot: {
    background: 'inherit',
    color: '#f4f4f4',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',

    borderBottom: '1px solid white',
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion classes={{ root: classes.accRoot }} elevation={0} square>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: '#f4f4f4' }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>About C2M2</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ marginLeft: '1rem' }}>
          <Typography style={{ fontSize: '13px' }}>
            This portal was produced as part of the Cities COVID Mitigation
            Mapping Program. The Cities&apos; COVID Mitigation Mapping (C2M2)
            program is part of the MapGive Initiative in the Office of the
            Geographer at the U.S. Department of State that builds partnerships
            to enhance geospatial capacity, generate data, and share maps to
            support planning for mitigating COVID-19 second order impacts. We
            acknowledge the many partners who make this a successful program.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion classes={{ root: classes.accRoot }} elevation={0} square>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: '#f4f4f4' }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Portal Links</Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '1rem',
          }}
        >
            <Link to="/" className="footer-link">
              <Typography style={{ fontSize: '14px' }} gutterBottom>
                Stories
              </Typography>
            </Link>
            <Link to="/visualizations" className="footer-link">
              <Typography style={{ fontSize: '14px' }} gutterBottom>
                Visualizations
              </Typography>
            </Link>
            <Link to="/downloads" className="footer-link">
              <Typography style={{ fontSize: '14px' }} gutterBottom>
                Downloads
              </Typography>
            </Link>
            <Link to="/about" className="footer-link">
              <Typography style={{ fontSize: '14px' }} gutterBottom>
                About
              </Typography>
            </Link>
        </AccordionDetails>
      </Accordion>

      <Accordion classes={{ root: classes.accRoot }} elevation={0} square>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: '#f4f4f4' }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Resources</Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '1rem',
          }}
        >
          <a
            href="https://c2m2-asia.github.io/kathmandu/"
            className="footer-link"
            target="_blank"
          >
            <Typography style={{ fontSize: '14px' }} gutterBottom>
              Interim Report
            </Typography>
          </a>
          <a
            href="https://github.com/c2m2-asia/kathmandu-data"
            className="footer-link"
            target="_blank"
          >
            <Typography style={{ fontSize: '14px' }} gutterBottom>
              Data
            </Typography>
          </a>
          <Link to="/" className="footer-link">
            <Typography style={{ fontSize: '14px' }} gutterBottom>
              Story Map
            </Typography>
          </Link>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
