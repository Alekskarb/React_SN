import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar";

const Navbar = (props) => {
    return (
        <>
            <div className={s.nav}>
                <div className={s.item}>
                    <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to="/dialogs">Messages</NavLink>
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
                    {/*<Sidebar nik={props.man.speakers}/>*/}
                </div>
            </div>

        </>
    );
};
export default Navbar;