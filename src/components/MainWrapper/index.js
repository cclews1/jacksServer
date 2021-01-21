import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: '1rem 0',
  },
}));

export default function MainWrapper(props) {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.wrapper}>{props.children}</Paper>
    </>
  );
}
