import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import sidebarReducer from "./sidebarReducer";
import authReducer from "./authReducer";
import usersReducer from "./usersReducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
    profilesPage: profileReducer,
    dialogsPage: dialogReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk))
);

window.store = store;

export default store;