import {createSelector} from "reselect";

const getUsers = (state) => {
    return state.usersPage.users
};
export const getUsersSuperSelect = createSelector(getUsers,
    (users) => {
    return users.filter(u => true);
});

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
};
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
};
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};
export const getFetching = (state) => {
    return state.usersPage.isFetching;
};
export const getFollowingProgress = (state) => {
    return state.usersPage.followingProgress;
};
export const countSomethingDifficult = (state) => {
    //for... math... big arrays
    let count = 22;
    return count;
};