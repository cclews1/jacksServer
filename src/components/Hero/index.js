import {
  Paper,
  Grid,
  Button,
  makeStyles,
  Typography,
  Container,
} from '@material-ui/core';
import CallIcon from '@material-ui/icons/Call';
import RoomIcon from '@material-ui/icons/Room';

const useStyles = makeStyles((theme) => ({
  backgroundImage: {
    [theme.breakpoints.up('md')]: {
      paddingTop: '50px',
      paddingBottom: '50px',
    },
    height: '100%',
    width: '100%',
    backgroundImage: `url('/img/C.png')`,
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
      marginBottom: '1rem'
    }
  },
  gridContainer: {
    marginTop: 0,
    marginBottom: 0
  }
}));

export default function Hero() {
  const classes = useStyles();
  const HeroButton = (props) => {
    return (
      <Grid item align='center'>
        <Button
          color='primary'
          variant='contained'
          endIcon={props.endIcon}
          className={classes.heroButton}
        >
          {props.children}
        </Button>
      </Grid>
    );
  };
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
            <HeroButton endIcon={<CallIcon />}>Call Now</HeroButton>
            <HeroButton endIcon={<RoomIcon />}>Find Us</HeroButton>
          </Grid>
        </Grid>
    </Paper>
  );
}
