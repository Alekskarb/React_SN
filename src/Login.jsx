import React from 'react';
import './App.css';
import {Field, reduxForm} from "redux-form";
import {InputArea} from "./components/common/FormsControl/FormsControl";
import {requiredFields} from "./components/utilites/validators/validators";
import {connect} from "react-redux";
import {login} from "./Redux/authReducer";
import {Redirect} from "react-router-dom";
import style from "./components/common/FormsControl/FormsControl.module.css";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  validate={[requiredFields]} type={'email'}
                       name={'email'} component={InputArea} value='22222'/>
                       Please, enter: free@samuraijs.com
            </div>
            <div>
                 <Field  validate={[requiredFields]} type={'password'} value={'ddddd'}
                       name={'password'} component={InputArea} />
                Please, enter:  free
            </div>
            <div>
                <Field type={'checkbox'} validate={[requiredFields]}
                       name={'rememberMe'} component={InputArea}/>
                remember me
            </div>
            {props.error && <div className={style.formSumError}>
                {props.error}
            </div>}
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

    if (props.isAuth) {
        return <Redirect to ={'/profile'}/>
    }

    return <div>
        <h2> LOGIN </h2>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
};

let mapStateToProps = (state)=> {
 return { isAuth: state.auth.isAuth}
};

export default connect(mapStateToProps, {login})(Login)

