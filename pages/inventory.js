import PageTemplate from '../src/components/PageTemplate';
import Subhead from '../src/components/Subhead';
import CarCard from '../src/components/CarCard';
import { getCars } from '../src/firebaseUtilities';
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  inventoryContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: theme.breakpoints.values.md,
    margin: 'auto',
    padding: '0 0.5rem 1rem 0.5rem',
  },
  heading: {
    margin: '0.75rem',
    marginTop: '1.25rem',
  },
}));

export default function Inventory({ data }) {
  const classes = useStyles();
  return (
    <>
      <PageTemplate>
        <Paper className={classes.inventoryContainer}>
          <div className={classes.heading}>
            <Subhead>Our Inventory</Subhead>
          </div>
          {data.map((car) => {
            return <CarCard key={car.id} car={car} />;
          })}
        </Paper>
      </PageTemplate>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const data = await getCars();
  return {
    props: { data },
  };
}
