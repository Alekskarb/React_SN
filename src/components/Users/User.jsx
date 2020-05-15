import React from 'react';
import styles from './users.module.css'
import userPict from '../../assets/images/samurai.jpg'
import {NavLink} from "react-router-dom";

let User = ({user, followingProgress, follow, unfollow, ...props}) => {

    return (
        <div>
            <span>
                <div>
                     <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPict} className={styles.userFoto}
                         alt={'unload'}/>
                    </NavLink>
                </div>
                <div>
{user.followed
    ? <button disabled={followingProgress.some(id => id === user.id)}
              onClick={() => {
                  unfollow(user.id)
              }}>
        unfollow
    </button>

    : <button disabled={followingProgress.some(id => id === user.id)}
              onClick={() => {
                  follow(user.id)
              }}>
        follow
    </button>}
            </div>
            </span>
            <span>
                <span>
    <div>{user.name}</div>
    <div>{user.status}</div>
</span>
            <span>
                  {/*<div>{'user.location.country'}</div>*/}
                {/*  <div>{'user.location.city'}</div>*/}
                </span>
                </span>
        </div>)
};

export default User;