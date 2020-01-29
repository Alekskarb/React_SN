import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilesPage: {
            myPost: [{id: 1, message: 'What is your name?', likesCount: 0},
                {id: 2, message: 'My Name is Pawel', likesCount: 456368},
                {id: 3, message: 'My Name is Sanek', likesCount: 34},
                {id: 4, message: 'Very well', likesCount: 45}],
            newPostText: 'samuray'
        },
        dialogsPage: {
            myDia: [
                {id: 1, name: 'Sasha'},
                {id: 2, name: 'Tanya'},
                {id: 3, name: 'Pasha'},
                {id: 4, name: 'Illya'}],
            myMess: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Im Ok'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'OK'}],
            newMessText: 'All right'
        },
        sideBar: {
            speakers: [
                {id: 1, nik: 'Dev'},
                {id: 2, nik: 'Jun'},
                {id: 3, nik: 'HR'},
                {id: 4, nik: 'PM'}],
            speaks: [
                {id: 1, speaks: 'Very good'},
                {id: 2, speaks: 'Good Idea'},
                {id: 3, speaks: 'some Bitch'},
                {id: 4, speaks: 'Real guy'}]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilesPage = profileReducer(this._state.profilesPage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state)
    },

};

window.store = store;

export default store;
