import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: 'center',
    fontFamily: 'Roboto Slab, serif',
    fontWeight: 300,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.6rem',
      fontWeight: 500,
    },
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
