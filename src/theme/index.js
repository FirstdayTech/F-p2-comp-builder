import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#ff4081',
    }
  },
  typography: {
    fontFamily: [ 'Roboto', 'Arial', 'sans-serif' ].join(','),
  },
})

export default theme