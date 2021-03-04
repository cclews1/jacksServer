import dynamic from 'next/dynamic';
import { makeStyles, Typography, Icon } from '@material-ui/core';
import MainWrapper from '../MainWrapper';
import Subhead from '../Subhead';

const useStyles = makeStyles((theme) => ({
  contactDetails: {
    width: '100%',
    height: '100%',
    display: 'flex',
    padding: '0 1rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
    [theme.breakpoints.up('md')]: {
      maxWidth: '27rem',
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '1rem',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  contact: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    margin: '1rem 0',
    [theme.breakpoints.up('md')]: {
      margin: '0.7rem 0',
    },
  },
  contact__header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'black',
    // // border: '1px black solid',
    // borderBottom: 'none',
    borderTopRightRadius: '10px',
    borderTopLeftRadius: '10px',
    padding: '0.1rem 0.5rem',
  },
  contact__header__icon: {
    marginRight: '0.3rem',
    color: theme.palette.primary.light,
    // color: theme.palette.primary.main,
  },
  contact__header__title: {
    color: theme.palette.primary.light,
    fontFamily: "'Roboto Slab', serif ",
    // color: theme.palette.primary.main,
  },
  contact__content: {
    padding: '0.1rem 0.5rem',
    background: theme.palette.primary.light,
    // border: `2px black solid`,
    borderBottomRightRadius: '10px',
    borderBottomLeftRadius: '10px',
    borderTop: 'none',
    width: '100%',
    textAlign: 'center',
  },
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <MainWrapper>
      <Subhead>Contact Us</Subhead>
      <div id='contact' className={classes.container}>
        <MapComponent />
        <div className={classes.contactDetails}>
          <ContactSection icon='call' title='Phone' content='410-355-9576' />
          <ContactSection
            icon='explore'
            title='Address'
            content='2701 Hawkins Point Rd, Curtis Bay, MD 21226'
          />
          <ContactSection
            icon='search'
            title='Directions'
            content="We're conveniently located just off Interstate 695 - Exit 1. Look for the yellow JACKS sign."
          />
        </div>
      </div>
    </MainWrapper>
  );
}

function ContactSection(props) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.contact}>
        <div className={classes.contact__header}>
          <Icon className={classes.contact__header__icon}>{props.icon}</Icon>
          <Typography variant='h6' className={classes.contact__header__title}>
            {props.title}
          </Typography>
        </div>
        <Typography variant='h6' className={classes.contact__content}>
          {props.content}
        </Typography>
      </div>
    </>
  );
}

const MapComponent = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () => <p>Loading maps...</p>,
});
