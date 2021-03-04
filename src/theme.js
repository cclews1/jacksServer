import { createMuiTheme } from '@material-ui/core/styles';
import { yellow, grey, red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: yellow[500],
    },
    secondary: {
      main: grey[300],
    },
    background: {
      default: '#fff',
    },
    white: {
      main: grey[100],
    },
  },
  typography: {
    jackFont: 'Roboto Slab, serif',
  },
});

export default theme;
