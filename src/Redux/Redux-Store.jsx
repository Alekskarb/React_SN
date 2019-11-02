import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogReducer from "./DialogReducer";
import sidebarReducer from "./SidebarReducer";
import usersReducer from "./UsersReducer";

let reducers = combineReducers({
    profilesPage: profileReducer,
    dialogsPage: dialogReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;