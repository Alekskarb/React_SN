import React from 'react';
import s from './FormsControl.module.css';

export const TextArea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error: '')}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span> 'some error' </span>}
        </div>
    )
};