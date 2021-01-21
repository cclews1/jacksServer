import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((Theme) => ({

}))

const CarCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image='/img/b.jpg' />
        <CardContent>
          <Typography
            className={classes.cardText}
            variant='h6'
            noWrap
            component='h2'
          >
            2011 Toyota Corolla
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
