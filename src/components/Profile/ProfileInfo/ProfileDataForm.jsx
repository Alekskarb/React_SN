import React, {useState} from 'react';
import {buildField, InputArea, TextArea} from "../../common/FormsControl/FormsControl";
import {handleSubmit, reduxForm} from "redux-form";
// import s from './ProfileInfo.module.css';

const ProfileDataForm = ({profile, handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <div><button> save profile </button></div>
        <div>
            <b> Full Name: </b> {buildField('Full Name', 'fullName', [], InputArea)}
        </div>
        <div>
            <b>Looking for a job: </b> {profile.lookingForAJob ? 'yes' : 'no'}
            {buildField('', 'LookingForAJob', [], InputArea, {type: 'checkbox'})}
        </div>
        <div>
            <b> My professional skills: </b>
            {buildField('My professional skills', 'lookingForAJobDescription', [], TextArea)}
        </div>

        <div><b>About Me: </b>{profile.aboutMe} </div>
        {buildField('About Me', 'aboutMe', [], TextArea)}
        <div>
        {/*    <b> CONTACTS: </b> {Object.keys(profile.contacts).map(key => {*/}
        {/*    return <Contacts key={key} title={key} value={profile.contacts[key]}/>*/}
        {/*})}*/}
        </div>
    </form>
};

const ProfileReduxDataForm = reduxForm({form: 'edit profile'})(ProfileDataForm);

export default ProfileReduxDataForm;