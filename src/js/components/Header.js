import React from 'react';
import HeaderIcon from './HeaderIcon';
import style from '../../css/Header.module.css';
import set from '../../img/icons/header/set.png';
import quest from '../../img/icons/header/quest.png';
import close from '../../img/icons/header/close.png';

const Header = ({ setSelectedCity }) => {
  return (
    <header className={style.header}>
      <div className={style.title}>
        top-rated tourist attraction in singapore
      </div>
      <div className={style.menu}>
        <div className={style.menu__icons}>
          <HeaderIcon ic={set} />
          <HeaderIcon ic={quest} />
          <HeaderIcon ic={close} onClick={() => setSelectedCity(null)} />
        </div>
      </div>
    </header>
  );
};

export default Header;
