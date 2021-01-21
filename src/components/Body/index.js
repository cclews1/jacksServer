import React, { useState } from 'react';
import { Grid, Container, makeStyles, Card } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '20px',
  },
  gridContainer: {
    position: 'relative',
    left: 0,
    right: 0,
  },
}));
export default function Body(props) {
  const [cars, setCars] = useState([]);

  const classes = useStyles();
  return (
    <>
      <div className={classes.wrapper}>
        <Container maxWidth='lg' className={classes.container}>
          <Grid
            container
            direction='column'
            className={classes.gridContainer}
            spacing={3}
          >
            {props.children.map((child, i) => (
              <Grid key={i} item>
                {child}
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}
