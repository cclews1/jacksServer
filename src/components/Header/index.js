import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Hidden,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  wrapper: {
    flexGrow: 1,
  },
  jacks: {
    fontFamily: 'Roboto Slab',
  },
  auto: {
    fontFamily: 'Damion',
  },
}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
      <div className={classes.root}>
        <AppBar position='fixed'>
          <Container maxWidth='lg'>
            <Toolbar>
              <Box
                display='flex'
                flexDirection='row'
                alignItems='center'
                justifyContent={matches ? null : 'center'}
                className={classes.wrapper}
              >
                <Typography variant='h4' className={classes.jacks}>
                  JACK'S
                </Typography>
                <Typography className={classes.auto} variant='h4'>
                  &nbsp;Auto Sales
                </Typography>
              </Box>
              <Hidden mdDown>
                <Button color='inherit'>Call</Button>
                <Button color='inherit'>Find Us</Button>
                <Button color='inherit'>View Inventory</Button>
              </Hidden>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </>
  );
}
