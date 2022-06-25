import React from 'react';
import style from '../../css/Menu.module.css';
import { place } from '../../data/place';

const Menu = ({ setSelectedCity }) => {
  const handleClick = (city, target) => {
    setSelectedCity(city);

    const active = document.querySelector(
      `.${style.menu__bottom_city__selected}`
    );
    active && active.classList.toggle(`${style.menu__bottom_city__selected}`);

    target.classList.toggle(`${style.menu__bottom_city__selected}`);
  };

  return (
    <div className={style.menu}>
      <div className={style.menu__top}>
        <div className={style.menu__top_filter}>Filter by Favorite</div>
      </div>

      {place.map(({ city, list }) => (
        <div className={style.menu__bottom} key={city}>
          <div
            className={style.menu__bottom_city}
            onClick={(e) => handleClick(city, e.currentTarget)}
          >
            {city}
          </div>
          <ul>
            {list.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;
