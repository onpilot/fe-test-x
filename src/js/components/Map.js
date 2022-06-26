import React, { useEffect, useState } from 'react';
import style from '../../css/Map.module.css';
import Aside from './Aside';
import MapApi from './MapApi';

const Map = ({ selectedCity, setSelectedCity }) => {
  const [markers, setMarkers] = useState(null);

  // fetch map/markers data from external json file
  useEffect(() => {
    const url =
      'https://gist.githubusercontent.com/onpilot/d98a9ec874dff04b6f767c76e300d72b/raw/c76316abd077b06c870e3a2c8836794500dbef54/markers.json';
    fetch(url).then((res) =>
      res
        .json()
        .catch((err) => console.log(err))
        .then((data) => setMarkers(data.markers))
    );
  }, []);

  return (
    <div className={style.map}>
      {markers && (
        <MapApi
          markers={markers}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
        />
      )}
      {selectedCity && <Aside selectedCity={selectedCity} />}
    </div>
  );
};

export default Map;
