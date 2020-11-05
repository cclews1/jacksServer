import React, { useState } from 'react';
import { Grid, Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '20px',
  },
  gridContainer: {
    position: 'relative',
  },
}));
export default function Body(props) {
  const [cars, setCars] = useState([]);

  const classes = useStyles();
  return (
    <>
      <Container maxWidth='lg' className={classes.container}>
        <Grid
          container
          direction='column'
          justify='center'
          className={classes.gridContainer}
          spacing={1}
        >
          {props.children.map((child, i) => (
            <Grid key={i} item>
              {child}
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
