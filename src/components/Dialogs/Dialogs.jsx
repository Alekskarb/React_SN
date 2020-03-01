import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.myDia.map((d) => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.myMess.map((m) => <Message message={m.message} key={m.id}/>);
    let newMessages = state.newMessText;

    let onAddMess = () => {
        props.addMess();
    };

    let onMessChange = (event) => {
        let body = event.target.value;
        props.updateMessText(body);
    };

    if (!props.isAuth) return <Redirect to={'/login'}/>;

    return (
        <div className={s.dialogs}>
            <div className={`${s.dialogsItems} ${s.active}`}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea onChange={onMessChange}
                              placeholder='enter message' value={newMessages}/>
                </div>
                <div>
                    <button onClick={onAddMess}>add mess</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;