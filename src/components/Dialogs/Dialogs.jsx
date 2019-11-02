import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.myDia.map((d) => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.myMess.map((m) => <Message message={m.message}/>);
    let newMessages = state.newMessText;

    let onAddMess = () => {
        props.onAddMess()}

    let onChangeMessage = (ev) => {
        let mess = ev.target.value;
        props.messChange(mess);}

    return (
        <div className={s.dialogs}>
            <div className={`${s.dialogsItems} ${s.active}`}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                <textarea onChange={onChangeMessage} value={newMessages} placeholder='enter message'/>
                </div>
                <div>
                    <button onClick={onAddMess}>add mess</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;

// myPost={props.profilesPage.myPost}
//           dispatch={props.dispatch}
//           newPostText={props.profilesPage.newPostText