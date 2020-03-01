import React from 'react';
import {addMessActionCreator, updateMessTextActionCreator} from "../../Redux/dialogReducer";
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
        addMess: () => {
            dispatch(addMessActionCreator())
        },
        updateMessText: (event) => {
            dispatch(updateMessTextActionCreator(event))
        }
    }
};


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)