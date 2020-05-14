import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

    return (<div>
        <Paginator currentPage={currentPage} totalItemsCount={totalUsersCount}
                   onPageChanged={onPageChanged} pageSize={pageSize}/>
        {users.map(u => <User key={u.id} user={u}
                              followingProgress={props.followingProgress}
                              follow={props.follow}
                              unfollow={props.unfollow}/>)
        }
    </div>)
};


export default Users;