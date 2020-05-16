import {profileAPI, usersAPI} from "../api/api";

let ADD_POST = 'ADD-POST';
let SET_USER_PROFILE = 'SET_USER_PROFILE';
let SET_STATUS = 'SET_STATUS';
let SET_USER_AVATAR = 'SET_USER_AVATAR';

let initialState = {
    myPost: [{id: 1, message: 'What is your name?', likesCount: 0},
        {id: 2, message: 'My Name is Pawel', likesCount: 456368},
        {id: 3, message: 'My Name is Sanek', likesCount: 34},
        {id: 4, message: 'Very well', likesCount: 45}],
    newPostText: 'samuray',
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.postFormMess,
                likesCount: 44
            };
            return {
                ...state,
                myPost: [...state.myPost, newPost],
            };
        }

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_STATUS: {
            return {...state, status: action.status};
        }
        case SET_USER_AVATAR: {
            return {...state, profile: {...state.profile, photos: action.photos}};
        }
        default:
            return state;
    }
};

export const addPostActionCreator = (postFormMess) => ({type: ADD_POST, postFormMess});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const updatePhotoSuccess = (photos) => ({type: SET_USER_AVATAR, photos});

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};
export const saveAvatar = (file) => async (dispatch) => {
    debugger
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
    dispatch(updatePhotoSuccess(response.data.data.photos))}
};

export default profileReducer;