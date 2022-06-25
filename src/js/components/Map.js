import React from 'react';
import style from '../../css/Map.module.css';
import mapMarker from '../../img/icons/description/map-marker.png';
import globe from '../../img/icons/description/globe.png';
import { description } from '../../data/description';

const Map = ({ selectedCity }) => {
  return (
    <div className={style.map}>
      <div>map</div>
      {selectedCity && (
        <aside className={style.aside}>
          <img
            src={description[selectedCity].img}
            alt={selectedCity}
            className={style.aside__img}
          />
          <h1 className={style.aside__title}>{selectedCity}</h1>
          <div className={style.aside__text}>
            {description[selectedCity].text.map((e, i) => (
              <p key={`${selectedCity}_text_${i}`}>{e}</p>
            ))}
            <div className={style.aside__text_extras}>
              <img src={mapMarker} alt='map-marker' />
              <span>{description[selectedCity].address}</span>
            </div>
            <div className={style.aside__text_extras}>
              <img src={globe} alt='globe' />
              <a href={description[selectedCity].web}>
                {description[selectedCity].web}
              </a>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default Map;
