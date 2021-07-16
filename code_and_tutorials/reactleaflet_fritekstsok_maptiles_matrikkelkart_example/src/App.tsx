import { ApiKeyPage } from './components/ApiKeyPage'
import './App.css';
import { Map } from './components/map/Map';
import { RecoilRoot } from 'recoil';
import bluegrey from '@material-ui/core/colors/blueGrey';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

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
  return (
    <div className="App">
      <RecoilRoot>
        <ThemeProvider theme={theme}>
           <Map />
           <ApiKeyPage/>
        </ThemeProvider>
      </RecoilRoot>
    </div>
  );
}

export default App;
