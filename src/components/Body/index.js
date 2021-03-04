import React, { useState } from 'react';
import { Grid, Container, makeStyles, Card } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flex: '1',
    paddingBottom: '0.5rem',
  },
  sectionContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  item: {
    margin: '0.5rem 0',
  },
}));
export default function Body({ children }) {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth='lg' className={classes.container}>
        <div className={classes.sectionContainer}>
          {children.length ? (
            children.map((child, i) => (
              <div key={i} className={classes.item}>
                {child}
              </div>
            ))
          ) : (
            <div className={classes.item}>{children} </div>
          )}
        </div>
      </Container>
    </>
  );
}
