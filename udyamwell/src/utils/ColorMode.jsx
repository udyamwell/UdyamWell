import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { green } from '@mui/material/colors';

const darkTheme = createTheme({
  palette: {
    primary: green,
    secondary: {
      main: '#236836',
    },
    light:{
      main:"#fff"
    },
    green:{
      main:green[400]
    }
  },
  breakpoints: {
    values: {
      xs: 300,
      sm: 450,
      md: 770,
      lg: 1024,
      xl:1350,
    }
  }
});

function ColorMode({children}) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default ColorMode;
