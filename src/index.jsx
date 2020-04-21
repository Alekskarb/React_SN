import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/redux-store';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

// setInterval(() => {
//     store.dispatch({type: 'FAKE'})
// }, 3000);


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root'));