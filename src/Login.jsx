import React from 'react';
import './App.css';
import {Field, reduxForm} from "redux-form";
import {buildField, InputArea} from "./components/common/FormsControl/FormsControl";
import {requiredFields} from "./components/utilites/validators/validators";
import {connect} from "react-redux";
import {login} from "./Redux/authReducer";
import {Redirect} from "react-router-dom";
import style from "./components/common/FormsControl/FormsControl.module.css";


const LoginForm = ({error, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>

            {buildField('e-mail', 'email', [requiredFields], InputArea, {type: 'email'}, 'free@samuraijs.com')}
            {buildField('Password', 'password', [requiredFields], InputArea, {type: 'password'}, 'free')}
            {buildField(null, 'rememberMe', [requiredFields], InputArea, {type: 'checkbox'}, 'rememberMe')}

            {error && <div className={style.formSumError}>
                {error}
            </div>}
            <div>
                <button> login</button>
            </div>
        </form>
    )
};

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, )
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h2> LOGIN </h2>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
};

let mapStateToProps = (state) => {
    return {isAuth: state.auth.isAuth}
};

export default connect(mapStateToProps, {login})(Login)

