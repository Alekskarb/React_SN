import React from 'react';
import styles from './users.module.css'
import userPict from '../../assets/images/images.png'
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, ...props}) => {

    return <div>
        <Paginator currentPage={props.currentPage} totalUsersCount={totalUsersCount}
                   onPageChanged={onPageChanged} pageSize={pageSize}/>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPict} className={styles.userFoto}
                         alt={'unload'}/>
                    </NavLink>
                </div>
                <div>
{u.followed
    ? <button disabled={props.followingProgress.some(id => id === u.id)}
              onClick={() => {
                  props.unfollow(u.id)
              }}>
        unfollow
    </button>

    : <button disabled={props.followingProgress.some(id => id === u.id)}
              onClick={() => {
                  props.follow(u.id)
              }}>
        follow
    </button>}
            </div>
            </span>
                <span>
                <span>
    <div>{u.name}</div>
    <div>{u.status}</div>
</span>
            <span>
                  {/*<div>{'u.location.country'}</div>*/}
                  {/*  <div>{'u.location.city'}</div>*/}
                </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;