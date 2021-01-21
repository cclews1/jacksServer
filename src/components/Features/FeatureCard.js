import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { Card, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: theme.palette.primary.main,
    width: '17rem',
    height: '17rem',
    margin: '1rem 0',
    [theme.breakpoints.up('md')]: {
      margin: '0 2rem',
    },
  },
  icon: {
    fontSize: '7rem',
  },
  heading: {
    padding: '0.6rem 0',
  },
}));

export default function FeatureCard(props) {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <Icon className={classes.icon}>{props.icon}</Icon>
        <Typography className={classes.heading} variant='h6' align='center'>
          {props.heading}
        </Typography>
        <Typography align='center'>{props.subheading}</Typography>
      </Card>
    </>
  );
}
