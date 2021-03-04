import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    height: '14rem',
    width: '100%',
    borderTop: `4px solid ${theme.palette.primary.main}`,
    borderBottom: `4px solid ${theme.palette.primary.main}`,
    [theme.breakpoints.up('md')]: {
      height: '22rem',
      marginLeft: '1rem',
    },
  },
}));

export default function MapComponent() {
  const classes = useStyles();
  return (
    <MapContainer
      className={classes.mapContainer}
      center={[39.203806, -76.565215]}
      zoom={11}
      scrollWheelZoom={false}
      doubleClickZoom={true}
      closePopupOnClick={false}
      dragging={false}
      zoomSnap={false}
      trackResize={false}
      touchZoom={false}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={[39.203806, -76.565215]}>
        <Popup>
          Jack's Auto Sales <br />
          2701 Hawkins Point Rd,
          <br />
          Curtis Bay, MD 21226
        </Popup>
      </Marker>
    </MapContainer>
  );
}
