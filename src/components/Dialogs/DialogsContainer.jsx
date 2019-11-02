import React from 'react';
import {addMessCreator, updateMessTextCreator} from "../../Redux/DialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps =(state)=> {
    return {
dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps =(dispatch)=> {
    return {
        onAddMess: ()=>{
            dispatch(addMessCreator())},
            messChange: (mess)=>{
            dispatch(updateMessTextCreator(mess))}

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;