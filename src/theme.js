import { createMuiTheme } from '@material-ui/core/styles';
import { yellow, grey } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: yellow[600],
    },
    secondary: {
      main: grey[400],
    },
    background: {
      default: '#fff',
    },
    white: {
      main: grey[100],
    },
  },
});

export default theme;
