import React from 'react';
import Link from 'next/link';
import {
  makeStyles,
  Button,
  Hidden,
  Card,
  Paper,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { ArrowForward as ArrowForwardIcon } from '@material-ui/icons';
import Subhead from '../Subhead';
import MainWrapper from '../MainWrapper';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  carousel: {
    position: 'relative',
    scrollBehavior: 'smooth',
    width: 'calc(100vw - 28px)',
    textAlign: 'center',
    maxWidth: theme.breakpoints.values.md,
    display: 'block',
    overflowX: 'scroll',
    whiteSpace: 'nowrap',
    margin: 'auto',
    paddingBottom: theme.spacing(1),
    'scrollbar-width': 'none',
    '-ms-overflow-style': 'none',
    '&::-webkit-scrollbar': {
      width: '0px',
      background: 'transparent',
      height: 0,
    },
  },
  cardContainer: {
    display: 'inline-block',
    margin: 'auto',
  },
  cardRoot: {
    display: 'inline-block',
    width: '250px',
    minWidth: '250px',
    margin: '8px',
    '&:first-of-type': {
      marginLeft: 0,
    },
    '&:last-of-type': {
      marginRight: 0,
    },
  },
  media: {
    height: '110px',
  },
  iconButton: {
    minWidth: 0,
    padding: '11px',
    position: 'absolute',
    borderRadius: '99px',
    zIndex: 3,
    opacity: '70%',
  },
  iconButtonLeft: {
    left: '50px',
    top: '130px',
    transform: 'rotate(180deg)',
    '-ms-transform': 'rotate(180deg)',
  },
  iconButtonRight: {
    right: '50px',
    top: '130px',
  },
  inventoryButton: {
    maxWidth: theme.breakpoints.values.md,
  },
}));

export default function InventoryScroll() {
  function scroll(direction) {
    let scroll;
    let distance = 516;
    direction === 'right' ? (scroll = distance) : (scroll = -distance);
    window.document.getElementById('carousel').scrollLeft += scroll;
  }
  const classes = useStyles();
  return (
    <>
      <MainWrapper>
        <div className={classes.root}>
          <Subhead>Featured Listings</Subhead>
          <Hidden mdDown>
            <Button
              className={`${classes.iconButton} ${classes.iconButtonLeft}`}
              variant='contained'
              color='primary'
              onClick={() => scroll('left')}
            >
              <ArrowForwardIcon />
            </Button>
            <Button
              className={`${classes.iconButton} ${classes.iconButtonRight}`}
              variant='contained'
              color='primary'
              onClick={() => scroll('right')}
            >
              <ArrowForwardIcon />
            </Button>
          </Hidden>
          <div className={classes.carousel} id='carousel'>
            <div className={classes.cardContainer}>
              <CarCard></CarCard>
              <CarCard></CarCard>
              <CarCard></CarCard>
              <CarCard></CarCard>
              <CarCard></CarCard>
              <CarCard></CarCard>
              <CarCard></CarCard>
              <CarCard></CarCard>
              <CarCard></CarCard>
              <CarCard></CarCard>
            </div>
          </div>
          <Link href='/inventory'>
            <Button
              component='a'
              variant='contained'
              color='primary'
              className={classes.inventoryButton}
            >
              View Entire Inventory
            </Button>
          </Link>
        </div>
      </MainWrapper>
    </>
  );
}

const CarCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.cardRoot}>
      <CardActionArea>
        <CardMedia className={classes.media} image='/img/b.jpg' />
        <CardContent>
          <Typography
            className={classes.cardText}
            variant='h6'
            noWrap
            component='h2'
          >
            2011 Toyota Corolla
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
