import React from 'react';
import Profile from "./Profile";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../Redux/profileReducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

 class ProfileContainer extends React.Component {

     componentDidMount() {
      let userId = this.props.match.params.userId;
         if (!userId) {userId = 2}
         this.props.getUserProfile(userId)
         this.props.getUserStatus(userId)
     }

     render() {

         return (
             <Profile {...this.props} profile={this.props.profile}
                      status={this.props.status}
                      updateUserStatus={this.props.updateUserStatus}
             />
             )
     }
 }

 let mapStateToProps = (state)=> ({
     profile: state.profilesPage.profile,
     status: state.profilesPage.status,
 });

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    //withAuthRedirect,
)
(ProfileContainer)