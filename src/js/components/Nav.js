import React from 'react';
import style from '../../css/Nav.module.css';
import Navicon from './Navicon';
import browse from '../../img/icons/nav/browse.png';
import suggest from '../../img/icons/nav/suggest.png';
import videos from '../../img/icons/nav/videos.png';
import blog from '../../img/icons/nav/blog.png';
import about from '../../img/icons/nav/about.png';

const Nav = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <Navicon ic={browse} title='browse' selected />
        </li>
        <li>
          <Navicon ic={suggest} title='suggest attraction' />
        </li>
        <li>
          <Navicon ic={videos} title='videos' />
        </li>
        <li>
          <Navicon ic={blog} title='blog' />
        </li>
        <li>
          <Navicon ic={about} title='about' />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
