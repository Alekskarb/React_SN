import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.active + ' ' + s.item}>
            <img src='https://scontent-frx5-1.cdninstagram.com/vp/a5bbd3423e3bb82ae01a25db07fa16c8/5E0914B0/t51.2885-19/s150x150/19052178_158575998016889_3547556210976751616_a.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com'/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;