import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../Redux/profileReducer";
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
        onAddPost: () => {
            dispatch(addPostActionCreator())
        },
        updatePostText: (body) => {
            dispatch(updatePostTextActionCreator(body))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)