import React from 'react';
import {buildField, InputArea, TextArea} from "../../common/FormsControl/FormsControl";
import {reduxForm} from "redux-form";
import s from './ProfileInfo.module.css';
import style from "../../common/FormsControl/FormsControl.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><button> save profile </button></div>
        {error && <div className={style.formSumError}>
            {error}
        </div>
        }
        <div>
            <b> Full Name: </b> {buildField('Full Name', 'fullName', [], InputArea)}
        </div>
        <div>
            <b>Looking for a job: </b>
            {buildField('', 'LookingForAJob', [], InputArea, {type: 'checkbox'})}
        </div>
        <div>
            <b> My professional skills: </b>
            {buildField('My professional skills', 'lookingForAJobDescription', [], TextArea)}
        </div>

        <div><b>About Me: </b> </div>
        {buildField('About Me', 'aboutMe', [], TextArea)}
        <div>
            <b> CONTACTS: </b> {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contacts}>
                <b>{key}: {buildField(key, 'contacts.' + key, [], InputArea)}
                </b>
                </div>

        })}
        </div>
    </form>
};

const ProfileReduxDataForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileReduxDataForm;