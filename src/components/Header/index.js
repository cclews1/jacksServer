import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Hidden,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HideOnScroll from './HideOnScroll';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import Link from 'next/link';

const breakpoints = createBreakpoints({});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  wrapper: {
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  },
  jacks: {
    fontFamily: 'Roboto Slab',
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
    },
  },
  auto: {
    fontFamily: 'Damion',
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <HideOnScroll>
          <AppBar position='fixed'>
            <Container maxWidth='lg'>
              <Toolbar>
                <Box
                  display='flex'
                  flexDirection='row'
                  alignItems='center'
                  className={classes.wrapper}
                >
                  <Typography variant='h4' className={classes.jacks}>
                    JACK'S
                  </Typography>
                  <Typography className={classes.auto} variant='h4'>
                    &nbsp;Auto Sales
                  </Typography>
                </Box>
                <Hidden xsDown implementation='css'>
                  <Link href={'/'}>
                    <Button color='inherit'>Home</Button>
                  </Link>
                  <Link href={'/#contact'}>
                    <Button color='inherit'>Find Us</Button>
                  </Link>
                  <Link href={'/inventory'}>
                    <Button color='inherit'>View Inventory</Button>
                  </Link>
                </Hidden>
              </Toolbar>
            </Container>
          </AppBar>
        </HideOnScroll>
      </div>
      <Toolbar />
    </>
  );
}
