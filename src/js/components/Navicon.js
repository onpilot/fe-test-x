import React from 'react';
import style from '../../css/NavIcon.module.css';

const handleClick = (target) => {
  const active = document.querySelector(`.${style.navicon__selected}`);
  active && active.classList.toggle(`${style.navicon__selected}`);

  target.classList.toggle(`${style.navicon__selected}`);
};

const Icon = ({ icon }) => <img src={icon} alt={icon} style={{ height: 40 }} />;

const Button = ({ ic, title, selected }) => {
  if (selected) {
    return (
      <button
        className={`${style.navicon} ${style.navicon__selected}`}
        onClick={(e) => handleClick(e.currentTarget)}
      >
        <Icon icon={ic} />
        <p>{title}</p>
      </button>
    );
  }
  return (
    <button
      className={style.navicon}
      onClick={(e) => handleClick(e.currentTarget)}
    >
      <Icon icon={ic} />
      <p>{title}</p>
    </button>
  );
};

const Navicon = ({ ic, title, selected }) => {
  return selected ? (
    <Button ic={ic} title={title} selected={selected} />
  ) : (
    <Button ic={ic} title={title} />
  );
};

export default Navicon;
