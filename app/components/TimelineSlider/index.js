import React from 'react';
import { uid } from 'react-uid';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Check from '@material-ui/icons/Check';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';

import { primary } from 'theme';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    opacity: '0.9',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  icon: {
    display: 'none',
  },
}));

function getSteps() {
  return [
    { label: 'Form deployed', date: '22nd April, 2020' },
    { label: 'Lockdown started', date: '29th April, 2020' },
    { label: 'Timeline 3', date: '15th May, 2020' },
    { label: 'Timeline 4', date: '1st June, 2020' },
    { label: 'Timeline 3', date: '15th June, 2020' },
  ];
}

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: primary,
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    width: 12,
    height: 12,
    borderRadius: '50%',
    backgroundColor: primary,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <div className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

export default function HorizontalNonLinearAlternativeLabelStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = [
    { label: 'Form deployed', date: '22nd April, 2020' },
    { label: 'Lockdown started', date: '29th April, 2020' },
    { label: 'Timeline 3', date: '15th May, 2020' },
    { label: 'Timeline 4', date: '1st June, 2020' },
    { label: 'Timeline 3', date: '15th June, 2020' },
  ];

  const isStepOptional = step => {
    return step === 1;
  };

  const handleStep = step => () => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const stepProps = {};
          return (
            <Step key={step.label} {...stepProps}>
              <StepLabel
                onClick={handleStep(index)}
                style={{ cursor: 'pointer' }}
                StepIconComponent={QontoStepIcon}
              >
                {step.label}
                <br />
                <Typography variant="caption">{step.date}</Typography>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
}
