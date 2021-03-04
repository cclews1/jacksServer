import Header from '../Header';
import BackgroundWrapper from '../BackgroundWrapper';
import Body from '../Body';
import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
  Hidden,
  Fab,
} from '@material-ui/core';
import { Home, DriveEta, Room, Call, Phone } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { setResponsiveNavigationHref } from '../ResponsiveNavHref';

const useStyles = makeStyles((theme) => ({
  navBar: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 99999,
  },
  fab: {
    zIndex: 1000,
    position: 'fixed',
    bottom: theme.spacing(10),
    right: theme.spacing(1),
  },
}));

export default function PageTemplate(props) {
  const [bottomNav, setBottomNav] = useState('home');
  const [href, setHref] = useState('/#contact');

  const router = useRouter();
  const path = router.pathname;
  const pathSplit = path.split('/')[1];

  useEffect(() => {
    if (pathSplit === '') {
      setBottomNav('home');
    } else if (pathSplit === 'inventory') {
      setBottomNav('cars');
    } else pathSplit === 'home';

    setResponsiveNavigationHref(setHref);
  });

  const classes = useStyles();
  return (
    <>
      <Header />
      <BackgroundWrapper>
        <Body>{props.children}</Body>
        <Hidden smUp>
          <BottomNavigation className={classes.spacer} />
        </Hidden>
      </BackgroundWrapper>
      <Hidden smUp>
        <Fab
          href='tel:410-355-9576'
          color='primary'
          aria-label='call'
          className={classes.fab}
        >
          <Phone />
        </Fab>
        <BottomNavigation
          value={bottomNav}
          showLabels
          onChange={(e, newValue) => {
            setBottomNav(newValue);
          }}
          className={classes.navBar}
        >
          {/* <Link href={'/'} passHref> */}
          <BottomNavigationAction
            label='Home'
            value='home'
            icon={<Home />}
            href={'/'}
          />
          {/* </Link>
          <Link href={'/inventory'} passHref> */}
          <BottomNavigationAction
            href={'/inventory'}
            value='cars'
            label='View Cars'
            icon={<DriveEta />}
          />
          {/* </Link>
          <Link> */}
          <BottomNavigationAction
            href={href}
            label='Find Us'
            value='find'
            icon={<Room />}
          />
          {/* </Link> */}
          {/* <BottomNavigationAction
            label='Call Now'
            value='call'
            icon={<Call />}
          /> */}
        </BottomNavigation>
      </Hidden>
    </>
  );
}
