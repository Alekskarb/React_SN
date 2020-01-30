import React from 'react';
import './App.css';

const Login = (props) => {
    return <div>
        <h1> LOGIN </h1>
        <form action="">
            <div>
                <input placeholder={'LOGIN'} />
            </div>
            <div>
                <input placeholder={'Password'} />
            </div>
            <div>
                <input type={'checkbox'} />
            </div>
            <div>
               <button> login </button>
            </div>
        </form>
    </div>


};

export default Login

