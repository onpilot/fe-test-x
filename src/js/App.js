import React, { useState } from 'react';
import '../css/index.css';
import style from '../css/App.module.css';
import Nav from './components/Nav';
import Menu from './components/Menu';
import Header from './components/Header';
import Map from './components/Map';

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className={style.wrapper}>
      <div className={style.navigation}>
        <Nav />
        <Menu setSelectedCity={setSelectedCity} />
      </div>
      <div className={style.map}>
        <Header setSelectedCity={setSelectedCity} />
        <Map selectedCity={selectedCity} />
      </div>
    </div>
  );
}

export default App;
