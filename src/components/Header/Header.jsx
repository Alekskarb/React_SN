import React from 'react';
import {NavLink} from "react-router-dom";
import s from'./Header.module.css';

const Header = (props) => {
  return <header className={s.header}>
    <img src='https://static.techspot.com/images2/news/bigimage/2019/01/2019-01-14-image-6.jpg'
    alt={'photos'}
    />

    <div className={s.loginBlock}>
      {props.isAuth
          ? <div>{props.login} - <button onClick={props.logout}> Log Out </button> </div>
      :<NavLink to={'/login'}> LOGIN </NavLink>}
    </div>

</header>
};

export default Header; 