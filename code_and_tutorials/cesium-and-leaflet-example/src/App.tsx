import React from 'react';
import { ApiKeyPage } from './components/ApiKeyPage'
import { Map } from './components/Map'
import bluegrey from '@material-ui/core/colors/blueGrey';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { useRecoilValue } from 'recoil';
import { apiKey } from './state/state';

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
  const apikey = useRecoilValue(apiKey);

  return (
      <ThemeProvider theme={theme}>
        {apikey
          ? <Map />
          : <ApiKeyPage />
        }
      </ThemeProvider>
  );
}
export default App;