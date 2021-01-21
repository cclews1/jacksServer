import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery, useTheme } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import Subhead from '../Subhead';
import FeatureCard from './FeatureCard';
import MainWrapper from '../MainWrapper';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginTop: '1rem',
      flexDirection: 'row',
    },
  },
}));

export default function Features() {
  const classes = useStyles();
  return (
    <>
      <MainWrapper>
        <div className={classes.container}>
          <Subhead>Why Jacks?</Subhead>
          <div className={classes.iconContainer}>
            <FeatureCard
              icon='sync'
              heading='Trade Ins Accepted'
              subheading="We'll buy back your old vehicle so you have more to spend on your new car."
            />
            <FeatureCard
              icon='build_circle'
              heading='Onsite Mechanics'
              subheading='We work on our own cars so we know everything is in order when you drive it off the lot.'
            />
            <FeatureCard
              icon='monetization_on'
              heading='Best Prices in the Area'
              subheading='As a family owned local business, we can afford to make sure you get a great deal.'
            />
          </div>
        </div>
      </MainWrapper>
    </>
  );
}
