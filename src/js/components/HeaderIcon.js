import React from 'react';
import style from '../../css/HeaderIcon.module.css';

const HeaderIcon = ({ ic, onClick }) => {
  return (
    <button className={style.btn_icon} onClick={onClick}>
      <img src={ic} alt={ic} />
    </button>
  );
};

export default HeaderIcon;
