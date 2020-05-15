import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/redux-store';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

// setInterval(() => {
//     store.dispatch({type: 'FAKE'})
// }, 3000);


ReactDOM.render(
    <HashRouter
        // basename={process.env.PUBLIC_URL}
    >
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>, document.getElementById('root'));