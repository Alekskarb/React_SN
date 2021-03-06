import React from 'react';
import {connect} from "react-redux";
import {follow, getUsers, setCurrentPage, setFollowingProgress, unfollow} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFetching,
    getFollowingProgress,
    getPageSize,
    getTotalUsersCount,
    getUsersSuperSelect
} from "../../Redux/usersSelectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        let {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize)
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
    }
}

const mapStateToProps = (state) => {
    return {
        // users: getSelectUsers(state),
        users: getUsersSuperSelect(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getFetching(state),
        followingProgress: getFollowingProgress(state),
    }
};

export default compose(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage, setFollowingProgress, getUsers
    }),
    withAuthRedirect,)(UsersContainer)


