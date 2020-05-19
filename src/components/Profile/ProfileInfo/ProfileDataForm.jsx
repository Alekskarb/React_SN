import React, {useState} from 'react';
import {buildField, InputArea} from "../../common/FormsControl/FormsControl";
// import s from './ProfileInfo.module.css';

const ProfileDataForm = ({profile}) => {
    return <form>
        <div><button onClick={()=>{''}}> save profile</button></div>
        <div>
            <b> Full Name: </b> {buildField('Full Name', 'fullName', [], InputArea)}
        </div>
        <div><b>Looking for a job: </b> {profile.lookingForAJob ? 'yes' : 'no'} </div>
        {profile.lookingForAJob &&
        <div>
            <b> My professional skills: </b> {profile.lookingForAJobDescription} </div>
        }
        <div><b>About Me: </b>{profile.aboutMe} </div>
        <div>
        {/*    <b> CONTACTS: </b> {Object.keys(profile.contacts).map(key => {*/}
        {/*    return <Contacts key={key} title={key} value={profile.contacts[key]}/>*/}
        {/*})}*/}
        </div>
    </form>
};
export default ProfileDataForm;