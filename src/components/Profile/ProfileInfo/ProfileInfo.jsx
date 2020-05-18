import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPict from '../../../assets/images/background.jpg'

const ProfileInfo = ({profile, status, updateUserStatus, isOwner, saveAvatar}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onFileLoad = (e) => {
        if (e.target.files.length) {
            saveAvatar(e.target.files[0])
        }
    };

    return (

        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPict} alt="no_image" className={s.content}/>
                {isOwner && <input type={"file"} onChange={onFileLoad}/>}
                <ProfileData profile={profile}/>
                <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
            </div>
        </div>
    )
};

const ProfileData = ({profile}) => {
    return <div>
        <div><b>Full Name: </b>
            {profile.fullName}
        </div>
        <div><b>Looking for a job: </b> {profile.lookingForAJob ? 'yes' : 'no'} </div>
        {profile.lookingForAJob &&
        <div>
            <b> My professional skills: </b> {profile.lookingForAJobDescription} </div>
        }
        <div><b>About Me: </b>{profile.aboutMe} </div>
        <div><b> CONTACTS: </b> {Object.keys(profile.contacts).map(key => {
            return <Contacts key={key} title={key} value={profile.contacts[key]}/>
        })}
        </div>
    </div>

};

const Contacts = ({title, value}) => {
    return <div className={s.contacts}><b> {title}: </b> {value} </div>
};

export default ProfileInfo;