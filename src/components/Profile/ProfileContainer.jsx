import React from 'react';
import Profile from "./Profile";
import {getUserProfile, getUserStatus, saveAvatar, saveProfile, updateUserStatus} from "../../Redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    reLoadProfileAvatar = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId)
    };

    componentDidMount() {
        this.reLoadProfileAvatar()
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.reLoadProfileAvatar()
        }
    }

    render() {

        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     isOwner = {!!this.props.match.params.userId}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}
                     saveAvatar = {this.props.saveAvatar}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilesPage.profile,
    status: state.profilesPage.status,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, saveAvatar, saveProfile}),
    withRouter
)(ProfileContainer)