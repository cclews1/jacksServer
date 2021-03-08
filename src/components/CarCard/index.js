import { useState, useEffect, useRef } from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
  CardActions,
  IconButton,
  Collapse,
} from '@material-ui/core';
import { Speed, ExpandMoreRounded } from '@material-ui/icons';
import ShareComponent from '../../components/ShareComponent';
import Link from 'next/link';
import { SizeMe } from 'react-sizeme';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: '1rem 0.5rem',
    maxWidth: 325,
    backgroundColor: theme.palette.grey[100],
    [theme.breakpoints.up('sm')]: {
      maxWidth: 550,
      margin: '0.75rem 0',
    },
  },
  subcontainer: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  },
  cardText: {
    fontFamily: theme.typography.jackFont,
  },
  mediaWrapper: {
    position: 'relative',
  },
  media: {
    // height: '10rem',
    [theme.breakpoints.up('sm')]: {
      width: '12rem',
      height: '8rem',
    },
  },
  imageCount: {
    backgroundColor: theme.palette.secondary.main,
    opacity: 0.75,
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderRadius: theme.shape.borderRadius,
    // borderBottomRightRadius: 0,
    margin: '0.25rem',
    padding: '0 0.25rem',
    zIndex: 500,
  },
  actionArea: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
  },
  content: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'start',
  },
  iconDescriptions: {
    paddingTop: '1rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    marginLeft: '5px',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'column',
    },
  },
}));

const CarCard = ({ car }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [imgHeight, setImgHeight] = useState();

  function handleExpandClick() {
    setOpen(!open);
  }

  return (
    <Card className={classes.card} variant='outlined'>
      <div className={classes.subcontainer}>
        <Link href={`/inventory/${car.id}`}>
          <CardActionArea className={classes.actionArea}>
            <div className={classes.mediaWrapper}>
              {car.images && (
                <Typography variant='body1' className={classes.imageCount}>
                  1 / {car.images.length}
                </Typography>
              )}
              <SizeMe>
                {({ size }) => {
                  return (
                    <CardMedia
                      style={{
                        height: `${0.66 * size.width}px`,
                      }}
                      className={classes.media}
                      image={
                        car.images
                          ? car.images[0]
                          : '/img/Optimized-no-image.png'
                      }
                    />
                  );
                }}
              </SizeMe>
            </div>
            <CardContent className={classes.content}>
              <Typography className={classes.cardText} variant='h6' noWrap>
                {car.year} {car.make} {car.model}
              </Typography>
              <div className={classes.iconDescriptions}>
                <div className={classes.iconContainer}>
                  <Typography className={classes.iconText} variant='h6'>
                    {'$' +
                      parseInt(car.price).toLocaleString('en-us', {
                        maximumFractionDigits: 0,
                      })}
                  </Typography>
                </div>
                <div className={classes.iconContainer}>
                  <Speed />
                  <Typography className={classes.iconText}>
                    {parseInt(car.miles).toLocaleString('en-us', {
                      maximumFractionDigits: 0,
                    }) + ' mi.'}
                  </Typography>
                </div>
              </div>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions className={classes.cardActions} disableSpacing>
          <ShareComponent car={car} />
          {car.description && (
            <IconButton
              onClick={handleExpandClick}
              aria-expanded={open}
              aria-label='show more'
              className={classes.expand + ' ' + (open && classes.expandOpen)}
            >
              <ExpandMoreRounded />
            </IconButton>
          )}
        </CardActions>
      </div>
      {car.description && (
        <Collapse in={open} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography variant='subtitle2'>Description:</Typography>
            <Typography variant='body1'>{car.description}</Typography>
          </CardContent>
        </Collapse>
      )}
    </Card>
  );
};
export default CarCard;
