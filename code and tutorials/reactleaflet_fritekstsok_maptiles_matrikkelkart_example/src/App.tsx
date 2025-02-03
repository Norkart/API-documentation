import React from 'react';
import { ApiKeyPage } from './components/ApiKeyPage'
import './App.css';
import { Map } from './components/map/Map';
import bluegrey from '@material-ui/core/colors/blueGrey';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { useRecoilValue } from 'recoil';
import { apiKey } from './state/state';

const theme = createMuiTheme({
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
    <div className="App">
      <ThemeProvider theme={theme}>
        {apikey
          ? <Map />
          : <ApiKeyPage />
        }
      </ThemeProvider>
    </div>
  );
}

export default App;
