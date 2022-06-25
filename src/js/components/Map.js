import React from 'react';
import style from '../../css/Map.module.css';
import Aside from './Aside';

const Map = ({ selectedCity }) => {
  return (
    <div className={style.map}>
      <div>map</div>
      {selectedCity && <Aside selectedCity={selectedCity} />}
    </div>
  );
};

export default Map;
