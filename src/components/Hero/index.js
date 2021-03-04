import { useState, useEffect } from 'react';
import {
  Paper,
  Grid,
  Button,
  makeStyles,
  Typography,
  Container,
  Hidden,
} from '@material-ui/core';
import CallIcon from '@material-ui/icons/Call';
import RoomIcon from '@material-ui/icons/Room';
import { setResponsiveNavigationHref, isMobile } from '../ResponsiveNavHref';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  backgroundImage: {
    [theme.breakpoints.up('md')]: {
      paddingTop: '50px',
      paddingBottom: '50px',
    },
    height: '100%',
    width: '100%',
    backgroundImage: `url('/img/Optimized-C.png')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  whiteColor: {
    color: theme.palette.white.main,
  },
  heroButton: {
    minWidth: '8rem',
  },
  buttonGridContainer: {
    [theme.breakpoints.down('md')]: {
      marginBottom: '1rem',
    },
  },
  gridContainer: {
    marginTop: 0,
    marginBottom: 0,
  },
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <Paper className={classes.backgroundImage}>
      <Grid
        container
        spacing={3}
        alignItems='center'
        justify='center'
        color='secondary'
        className={classes.gridContainer}
      >
        <Grid item xs={12} lg={6}>
          <Container>
            <Typography
              align='center'
              className={classes.whiteColor}
              variant='h4'
              style={{ fontWeight: 'bold' }}
            >
              Jacks Auto Sales has been putting drivers on the road all across
              the Glen Burnie-Pasadena area for over 50 years.
            </Typography>
          </Container>
        </Grid>
        <Grid
          item
          container
          spacing={5}
          direction='column'
          justify='space-around'
          xs={12}
          lg={3}
          className={classes.buttonGridContainer}
        >
          <HeroButton classes={classes} isCallButton endIcon={<CallIcon />}>
            Call Now
          </HeroButton>
          <HeroButton classes={classes} endIcon={<RoomIcon />}>
            Find Us
          </HeroButton>
        </Grid>
      </Grid>
    </Paper>
  );
}

function HeroButton({ endIcon, children, classes, isCallButton }) {
  const [href, setHref] = useState('/#contact');

  useEffect(() => {
    if (isCallButton) {
      isMobile() ? setHref('tel:410-355-9576') : null;
    } else {
      setResponsiveNavigationHref(setHref);
    }
  }, []);

  return (
    <Grid item align='center'>
      <Link href={href}>
        <Button
          color='primary'
          variant='contained'
          endIcon={endIcon}
          className={classes.heroButton}
        >
          {children}
        </Button>
      </Link>
    </Grid>
  );
}

// function detectiOS() {
//   return (
//     [
//       'iPad Simulator',
//       'iPhone Simulator',
//       'iPod Simulator',
//       'iPad',
//       'iPhone',
//       'iPod',
//     ].includes(navigator.platform) ||
//     // iPad on iOS 13 detection
//     (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
//   );
// }

// function isMobile() {
//   return /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent);
// }

// function getMobileMapHref() {
//   const androidHref =
//     'https://www.google.com/maps/search/?api=1&query=2701%20Hawkins%20Point%20Rd%2C%20Curtis%20Bay%2C%20Maryland%2C%2021226';

//   const iosHref =
//     'http://maps.apple.com/?daddr=2701+Hawkins+Point+Rd,+Curtis+Bay,+MD,21226';

//   if (detectiOS()) {
//     return iosHref;
//   } else {
//     return androidHref;
//   }
// }

// function setResponsiveNavigationHref(setHref) {
//   if (isMobile()) {
//     setHref(getMobileMapHref());
//   } else {
//     setHref('/#contact');
//   }
// }
