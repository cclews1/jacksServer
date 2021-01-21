import { createMuiTheme } from '@material-ui/core/styles';
import { yellow, grey, blue } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: yellow[500],
    },
    secondary: {
      main: grey[600],
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
