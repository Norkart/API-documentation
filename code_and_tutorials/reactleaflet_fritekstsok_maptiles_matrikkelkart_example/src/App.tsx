import React from 'react';
import { ApiKey } from './components/ApiKey'
import logo from './logo.svg';
import './App.css';
import { Search } from './components/Search';
import { Map } from './components/Map';

function App() {
  return (
    <div className="App">
      <ApiKey />
      <Search />
      <Map/>
     content here
    </div>
  );
}

export default App;
