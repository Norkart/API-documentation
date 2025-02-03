import React from 'react';
import { Map } from './components/Map'
import bluegrey from '@material-ui/core/colors/blueGrey';
import { createTheme, ThemeProvider } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1E7400',
    },
    secondary: {
      main: bluegrey[600],
    }
  },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
         <Map />
      </ThemeProvider>
  );
}
export default App;