import React from 'react';
import {addMessActionCreator} from "../../Redux/dialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMess: (newMessages) => {
            dispatch(addMessActionCreator(newMessages))
        },
    }
};


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,)(Dialogs)