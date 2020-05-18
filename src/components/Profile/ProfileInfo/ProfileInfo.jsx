import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPict from '../../../assets/images/background.jpg'

const ProfileInfo = ({profile, status, updateUserStatus, isOwner, saveAvatar}) => {
    if (!profile) {
        return <Preloader/>
    }

   const onFileLoad = (e)=> {
       if (e.target.files.length) {
           saveAvatar(e.target.files[0])
       }
   };

    return (

        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPict} alt="no_image" className={s.content}/>
                {isOwner && <input type={"file"} onChange={onFileLoad}/> }
<div> <b>Full Name: </b>
 {profile.fullName}
</div>
                <div><b>Looking for a job: </b> {profile.lookingForAJob ? 'yes' : 'no'} </div>
                {profile.lookingForAJob &&
                <div>
                    <b> My professional skills: </b> {profile.lookingForAJobDescription} </div>
                }
                <div><b>About Me: </b>{profile.aboutMe} </div>

                <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
            </div>
        </div>
    )
};

export default ProfileInfo;