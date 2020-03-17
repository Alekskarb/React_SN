import React from 'react';
import {connect} from "react-redux";
import {
    follow, setFollowingProgress,
    setCurrentPage,
    unfollow, getUsers
} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {

    componentDidMount() {
       this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    };

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
               setFollowingProgress={this.props.setFollowingProgress}
               followingProgress={this.props.followingProgress}
        />
        </>
        }}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress,
    }};



export default compose(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage, setFollowingProgress, getUsers}),
    withAuthRedirect,)(UsersContainer)


