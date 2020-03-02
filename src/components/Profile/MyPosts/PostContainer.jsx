import React from 'react';
import {addPostActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        myPost: state.profilesPage.myPost,
        newPostText: state.profilesPage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: (postFormMess) => {
            dispatch(addPostActionCreator(postFormMess))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)