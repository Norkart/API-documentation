import React from 'react';
import { ApiKey } from './components/ApiKey'
import './App.css';
import { Map } from './components/Map';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <ApiKey />
        <Map/>
      </RecoilRoot>
    </div>
  );
}

export default App;
