import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.myDia.map((d) => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.myMess.map((m) => <Message message={m.message} key={m.id}/>);

    let onAddMess = (e) => {
       // alert(e.newMessages);
        props.addMess(e.newMessages);
    };

    if (!props.isAuth) return <Redirect to={'/login'}/>;

    return (
        <div className={s.dialogs}>
            <div className={`${s.dialogsItems} ${s.active}`}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <ReduxDialogsForm onSubmit={onAddMess}/>

            </div>
        </div>
    )
};

const DialogsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder='enter message' name={'newMessages'} component={'input'}/>
        </div>
        <div>
            <button>add mess</button>
        </div>
    </form>
};

const ReduxDialogsForm =reduxForm({form: 'reduxDialogsForm'})(DialogsForm);

export default Dialogs;