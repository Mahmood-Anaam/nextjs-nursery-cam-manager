import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    h6: {
      fontSize: '1.25rem',
    },
  },
});

export default theme;
