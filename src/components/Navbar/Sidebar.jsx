import React from 'react';
import s from './Navbar.module.css';
import Friends from "./Friends";

const Sidebar = (props) => {

    let friends = props.nik.map((f) => {
        return <Friends key={f.id} nik={f.nik}/>
    });

    return (
        <div className={s.friendsContainer}>
            {friends}
        </div>
    );
};
export default Sidebar;