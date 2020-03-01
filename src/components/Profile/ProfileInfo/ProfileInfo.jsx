import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.content}>
                <img
                    src='https://cdn.pixabay.com/photo/2015/01/08/19/10/jetty-593401_960_720.jpg' alt={'no_image'}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                <ProfileStatus status={props.status}
                               updateUserStatus={props.updateUserStatus}
                />
            </div>
        </div>

    )
};

export default ProfileInfo;