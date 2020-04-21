import React from 'react';
import s from './FormsControl.module.css';
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, child, children}) => {
    const hasError = touched && error;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error: '')}>
            <div>
                {children}
            </div>
            {hasError && <span> {error} </span>}
        </div>
    )
};

export const InputArea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}>
        <input {...input} {...restProps}/>
    </FormControl>
};
export const TextArea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}>
        <textarea {...input} {...restProps}/>
    </FormControl>
};

export const buildField = (placeholder, name, validators, component, props={}, text) => (
<div>
    <Field placeholder={placeholder} name={name}
           validate={validators} component={component} {...props}/> {text}
</div>
);