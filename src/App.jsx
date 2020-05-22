import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer"
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/appReducer";
import Preloader from "./components/common/preloader";
import {withLazySuspense} from "./hoc/withLazySuspense";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends React.Component {

    catchAllUnhandledErrors = (reason, promiseRejectionEvent) => {
        alert('Some Error!')
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path='/'
                               render={() => <Redirect to={'/profile'}/>}/>
                        <Route path='/dialogs'
                               render={withLazySuspense(DialogsContainer)}/>

                        <Route path='/profile/:userId?'
                               render={() => {
                                   return <React.Suspense fallback={<Preloader/>}>
                                       <ProfileContainer/>
                                   </React.Suspense>
                               }
                               }/>

                        <Route path='/users'
                               render={() => <UsersContainer/>}/>

                        <Route path='/login'
                               render={() => <Login/>}/>
                        <Route exact path='*'
                               render={() => <div>error 404, page not found</div>}/>
                    </Switch>

                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => (
    {
        initialized: state.app.initialized
    }
);

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(App);