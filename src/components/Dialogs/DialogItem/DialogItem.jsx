import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.active + ' ' + s.item}>
            <img alt={'simple icon'}
                src='https://avatars.githubusercontent.com/u/53193249?s=100'/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;