import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className={s.content}>
                <img
                    src='https://cdn.pixabay.com/photo/2015/01/08/19/10/jetty-593401_960_720.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>

    )
}

export default ProfileInfo;