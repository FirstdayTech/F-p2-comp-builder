import { createTheme } from '@mui/material';
import componentsOverrides from './overrides';

const theme = createTheme({
  palette: {
    primary: {
      main: '#166a1b',
    },
    secondary: {
      main: '#063c7b',
    },
  },
  typography: {
    fontFamily: [ 'Roboto', 'Arial', 'sans-serif' ].join(','),
  },
  components: {
    ...componentsOverrides
  }
});

export default theme;