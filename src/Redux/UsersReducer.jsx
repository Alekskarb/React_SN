const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UN_FOLLOW';
const SETUSERS = 'SET_USERS';

let initialState = {
    users: []
}

const usersReducer = (state =initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return  {
                ...state, users: state.users.map(u => {
                if (u.id === action.userId) {return {...u, follow: true}}
                return u;
                })}
                case UNFOLLOW:
                    return  {
                        ...state, users: state.users.map(u => {
                            if (u.id === action.userId) {return {...u, follow: false}}
                            return u;
                        })}
        case SETUSERS:
            return  {
                ...state, users: [...state.users, ...action.users]}
        default: return state;
                }}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SETUSERS, users});
export default usersReducer