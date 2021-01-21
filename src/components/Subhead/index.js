import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: 'center',
    // marginTop: theme.spacing(2),
    fontFamily: 'Roboto Slab, serif',
    fontWeight: 300,
  },
}));

export default function SubheadText(props) {
  const classes = useStyles();
  return (
    <Typography variant='h4' className={classes.header} fontWeight={300}>
      - {props.children} -
    </Typography>
  );
}
