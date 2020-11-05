import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Paper,
  GridList,
  GridListTile,
  GridListTileBar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  header: {
    textAlign: 'center',
  },
}));

export default function InventoryScroll() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    getCars();
  }, []);

  async function getCars() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    console.log(data);
    setCars(data);
  }

  const classes = useStyles();
  return (
    <>
      <Paper>
        <Container>
          <Typography variant='h5' className={classes.header}>
            Our Vehicles
          </Typography>
          <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.5}>
              <GridListTile></GridListTile>
            </GridList>
          </div>
        </Container>
        {cars.map((car) => (
          <h1>{car.title}</h1>
        ))}
      </Paper>
    </>
  );
}
