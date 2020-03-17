import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Navbar = () => {

    const {userId} = useSelector(state => state.auth);

    return (
        <>
            <div className={s.nav}>
                <div className={s.item}>
                    <NavLink to={`/profile/${userId}`} activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to="/dialogs">Messages</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to="/users">USERS</NavLink>
                </div>
                <div className={s.item}>
                    <a>Music</a>
                </div>
                <div className={s.item}>
                    <a>Settings</a>
                </div>
                <hr/>
                <div>
                    <h2>Friends</h2>
                </div>
            </div>
        </>
    )
};

export default Navbar;