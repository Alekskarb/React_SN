import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, withRouter} from "react-router-dom";
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
    componentDidMount() {
        this.props.initializeApp();
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

                    <Route path='/dialogs'
                           render={withLazySuspense(DialogsContainer)}/>

                    <Route path='/profile/:userId?'
                           render={() => {return <React.Suspense fallback={<Preloader/>}>
                           <ProfileContainer/>
                               </React.Suspense>}
                           }/>

                    <Route path='/users'
                           render={() => <UsersContainer/>}/>

                    <Route path='/login'
                           render={() => <Login/>}/>
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