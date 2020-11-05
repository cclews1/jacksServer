import React from 'react';
import {
  makeStyles,
  Paper,
  Button,
  GridList,
  GridListTile,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    position: 'absolute',
    display: 'flex',
    flexWrap: 'nowrap',
    whiteSpace: 'nowrap',
    overflow: 'auto',
    gap: '16px',
    padding: '6px',
  },
  // root: {
  //   display: 'flex',
  //   flexWrap: 'wrap',
  //   justifyContent: 'space-around',
  //   overflow: 'hidden',
  //   width: '100%',
  // },
  cardRoot: {
    flex: '0 0 auto',
    display: 'inline-block',
    width: '250px',
    // backgroundColor: 'lightgray',
  },
  media: {
    height: '110px',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
}));

export default function InventoryScroll() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <CarCard></CarCard>
        <CarCard></CarCard>
        <CarCard></CarCard>
        <CarCard></CarCard>
      </div>
      <Button>View Entire Inventory</Button>
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
