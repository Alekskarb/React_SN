import React from 'react';
import './App.css';
import {Field, reduxForm} from "redux-form";
import {InputArea} from "./components/common/FormsControl/FormsControl";
import {requiredFields} from "./components/utilites/validators/validators";
import {connect} from "react-redux";
import {login} from "./Redux/authReducer";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'email'} validate={[requiredFields]}
                       name={'email'} component={InputArea}/>
            </div>
            <div>
                <Field placeholder={'Password'} validate={[requiredFields]}
                       name={'password'} component={InputArea}/>
            </div>
            <div>
                <Field type={'checkbox'} validate={[requiredFields]}
                       name={'rememberMe'} component={InputArea}/>
                remember me
            </div>
            <div>
                <button> login </button>
            </div>
        </form>
    )
};

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    };
    return <div>
        <h2> LOGIN </h2>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
};

export default connect(null, {login})(Login)

