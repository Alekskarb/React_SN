import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPict from '../../../assets/images/background.jpg'

const ProfileInfo = ({profile, status, updateUserStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (

        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPict} alt="no_image" className={s.content}/>
                <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}
                />
            </div>
        </div>
    )
};

export default ProfileInfo;