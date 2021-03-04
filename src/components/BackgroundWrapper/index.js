import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  bgWrapper: {
    'background-color': theme.palette.secondary.light,
    'background-image': "url('/img/3px-tile.png')",
    maxWidth: '100%',
    maxHeight: '100%',
    minHeight: '100vh',
    scrollBehavior: 'smooth',
    display: 'flex',
    flexDirection: 'column',
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
