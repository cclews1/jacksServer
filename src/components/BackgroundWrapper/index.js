import { makeStyles } from '@material-ui/core';

const backgroundImage =
  'https://www.transparenttextures.com/patterns/3px-tile.png';

const useStyles = makeStyles((theme) => ({
  bgWrapper: {
    'background-color': theme.palette.secondary.light,
    'background-image': `url(${backgroundImage})`,
    width: '100%',
    height: '100%',
  },
}));

export default function BackgroundWrapper(props) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.bgWrapper}>{props.children}</div>
    </>
  );
}
