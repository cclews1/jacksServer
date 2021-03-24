import { useState, useEffect, useRef } from 'react';
import PageTemplate from '../../src/components/PageTemplate';
import { getCar } from '../../src/firebaseUtilities';
import ErrorPage from 'next/error';
import Head from 'next/head';
import {
  CardContent,
  CardMedia,
  Card,
  makeStyles,
  Typography,
  CardActionArea,
  IconButton,
  CardActions,
} from '@material-ui/core';
import { NavigateNext, Speed } from '@material-ui/icons';
import ShareComponent from '../../src/components/ShareComponent';
import Contact from '../../src/components/Contact';
import { SizeMe } from 'react-sizeme';

function selectorCommon(theme) {
  return {
    height: 50,
    minWidth: 75,
    [theme.breakpoints.up('sm')]: {
      height: 100,
      minWidth: 150,
    },
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: 600,
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      maxWidth: theme.breakpoints.values.md,
    },
  },
  media: {
    width: 'calc(100%)',
    height: 200,
    maxWidth: theme.breakpoints.values.sm,
    [theme.breakpoints.up('sm')]: {
      height: 340,
    },
    [theme.breakpoints.up('md')]: {
      height: 400,
      minWidth: 600,
    },
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'auto',
  },
  subContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '-8px',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  subContent__dataDisplay: {
    width: '100%',
  },
  cardActions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'row',
    },
  },
  carName: {
    fontFamily: theme.typography.jackFont,
  },
  carInfo: {
    margin: '1rem 0 0.5rem 0',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  speedIcon: {
    marginRight: '0.2rem',
  },
  mileage: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontFamily: theme.typography.jackFont,
  },
  imageSelect: {
    display: 'flex',
    alignItems: 'center',
    overflow: 'auto',
    marginBottom: '0.5rem',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  selectorCard: {
    boxSizing: 'content-box',
    marginRight: '1rem',
    ...selectorCommon(theme),
  },
  selectorMedia: {
    ...selectorCommon(theme),
  },
  isSelectedCard: {
    border: `3px solid ${theme.palette.primary.main}`,
  },
  navButton: {
    zIndex: 999,
    position: 'absolute',
    height: '100%',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  leftNav: {
    left: 0,
    transform: 'rotate(180deg)',
  },
  rightNav: {
    right: 0,
  },
  navBackground: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.light,
    opacity: '75%',
    borderRadius: theme.shape.borderRadius,
  },
  contactWrap: {
    width: '100%',
    marginTop: '2rem',
    maxWidth: theme.breakpoints.values.md,
  },
}));

const CarPage = ({ car, err }) => {
  if (err) {
    return <ErrorPage statusCode={err.status} />;
  } else {
    return <CarExistsPage car={car} />;
  }
};

function CarExistsPage({ car }) {
  const classes = useStyles();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (car.images) {
      document
        .getElementById(`select-card-${currentImage}`)
        .scrollIntoView({ block: 'end', behavior: 'smooth', inline: 'center' });
    }
  }, [currentImage]);

  return (
    <>
      <Head>
        <meta
          property='og:title'
          content={`${car.year} ${car.make} ${car.model}`}
        />
        {car.images ? (
          <meta property='og:image' content={car.images[0]} />
        ) : null}
      </Head>
      <PageTemplate>
        <div className={classes.root}>
          <Card className={classes.card}>
            {car.images ? (
              <div style={{ position: 'relative' }}>
                <NavButton
                  direction='left'
                  currentImage={currentImage}
                  setCurrentImage={setCurrentImage}
                  images={car.images}
                />
                <NavButton
                  direction='right'
                  currentImage={currentImage}
                  setCurrentImage={setCurrentImage}
                  images={car.images}
                />
                <SizeMe>
                  {({ size }) => {
                    return (
                      <CardMedia
                        style={{
                          height: `${size.width * 0.66}px`,
                        }}
                        image={car.images[currentImage]}
                        className={classes.media}
                      />
                    );
                  }}
                </SizeMe>
              </div>
            ) : null}
            <CardContent className={classes.content}>
              {car.images ? (
                <ImageSelector
                  images={car.images}
                  setCurrentImage={setCurrentImage}
                  currentImage={currentImage}
                />
              ) : null}
              <div className={classes.subContent}>
                <div className={classes.subContent__dataDisplay}>
                  <Typography variant='h5' className={classes.carName}>
                    {car.year} {car.make} {car.model}
                  </Typography>
                  <div className={classes.carInfo}>
                    {car.price ? (
                      <Typography variant='h5' className={classes.price}>
                        {'$' +
                          parseInt(car.price).toLocaleString('en-us', {
                            maximumFractionDigits: 0,
                          })}
                      </Typography>
                    ) : null}
                    <div className={classes.mileage}>
                      <Speed className={classes.speedIcon} />
                      {car.miles ? (
                        <Typography variant='h5'>
                          {parseInt(car.miles).toLocaleString('en-us', {
                            maximumFractionDigits: 0,
                          }) + ' mi.'}
                        </Typography>
                      ) : null}
                    </div>
                  </div>
                  {car.description ? (
                    <>
                      <Typography variant='h6'>Description:</Typography>
                      <Typography variant='body1'>{car.description}</Typography>
                    </>
                  ) : null}
                </div>
                <CardActions className={classes.cardActions} disableSpacing>
                  <ShareComponent car={car} />
                </CardActions>
              </div>
            </CardContent>
          </Card>
          <div className={classes.contactWrap}>
            <Contact />
          </div>
        </div>
      </PageTemplate>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const carId = ctx.params.carId;
  try {
    const car = await getCar(carId);
    return {
      props: { car },
    };
  } catch (err) {
    if (ctx.res) {
      ctx.res.statusCode = err.status;
    }
    return {
      props: { err },
    };
  }
}

function ImageSelector({ images, setCurrentImage, currentImage }) {
  const classes = useStyles();

  return (
    <div className={classes.imageSelect}>
      {images.map((image, i) => {
        return (
          <Card
            key={i}
            className={
              classes.selectorCard +
              ' ' +
              (i === currentImage ? classes.isSelectedCard : null)
            }
            id={`select-card-${i}`}
          >
            <CardActionArea onClick={(e) => setCurrentImage(i)}>
              <CardMedia image={image} className={classes.selectorMedia} />
            </CardActionArea>
          </Card>
        );
      })}
    </div>
  );
}

function NavButton({ direction, currentImage, setCurrentImage, images }) {
  const classes = useStyles();

  function setDirectionStyle() {
    if (direction === 'left') {
      return classes.leftNav;
    }
    if (direction === 'right') {
      return classes.rightNav;
    }
  }

  function handleClick() {
    if (direction === 'left') {
      currentImage === 0
        ? setCurrentImage(images.length - 1)
        : setCurrentImage(currentImage - 1);
    }
    if (direction === 'right') {
      currentImage + 1 === images.length
        ? setCurrentImage(0)
        : setCurrentImage(currentImage + 1);
    }
  }

  return (
    <IconButton
      className={classes.navButton + ' ' + setDirectionStyle()}
      onClick={(e) => handleClick()}
    >
      <div className={classes.navBackground}>
        <NavigateNext />
      </div>
    </IconButton>
  );
}

export default CarPage;
