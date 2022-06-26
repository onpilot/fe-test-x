import React, { useEffect } from 'react';
import style from '../../css/Menu.module.css';
import { place } from '../../data/place';

const Menu = ({ selectedCity, setSelectedCity }) => {
  const deselectMenu = () => {
    const prevSelected = document.querySelector(
      `.${style.menu__bottom_city__selected}`
    );
    prevSelected &&
      prevSelected.classList.toggle(`${style.menu__bottom_city__selected}`);
  };

  const handleClick = (city, target) => {
    setSelectedCity(city);
    deselectMenu();
    target.classList.toggle(`${style.menu__bottom_city__selected}`);
  };

  useEffect(() => {
    if (selectedCity) {
      const city = selectedCity.split(' ').join('').toLowerCase();
      const id = `menu_${city}`;
      const toBeSelected = document.getElementById(id);

      deselectMenu();
      toBeSelected.classList.toggle(`${style.menu__bottom_city__selected}`);
    }
  }, [selectedCity]);

  return (
    <div className={style.menu}>
      <div className={style.menu__top}>
        <div className={style.menu__top_filter}>Filter by Favorite</div>
      </div>

      {place.map(({ city, list }) => {
        const id = `menu_${city.split(' ').join('').toLowerCase()}`;
        return (
          <div className={style.menu__bottom} key={city}>
            <div
              id={id}
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
        );
      })}
    </div>
  );
};

export default Menu;
