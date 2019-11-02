import React from 'react';
import styles from './users.module.css'

const Users = (props) => {

    if (props.users.length === 0) {

    props.setUsers(
        [{
            id: 1,
            myUrl: 'https://yt3.ggpht.com/a/AGF-l7_bxwzkHGLOTdWlmToCBYJ7llyd7vtG6_efEA=s48-c-k-c0xffffffff-no-rj-mo',
            follow: false,
            fullName: 'Sanek',
            location: {city: 'Minsk', country: 'Belarus'}
        },
            {
                id: 2,
                myUrl: 'https://yt3.ggpht.com/a/AGF-l7_bxwzkHGLOTdWlmToCBYJ7llyd7vtG6_efEA=s48-c-k-c0xffffffff-no-rj-mo',
                follow: true,
                fullName: 'Pawel',
                location: {city: 'Brest', country: 'Belarus'}
            },
            {
                id: 3,
                myUrl: 'https://yt3.ggpht.com/a/AGF-l7_bxwzkHGLOTdWlmToCBYJ7llyd7vtG6_efEA=s48-c-k-c0xffffffff-no-rj-mo',
                follow: false,
                fullName: 'Jhon',
                location: {city: 'Grodno', country: 'Belarus'}
            },
            {
                id: 4,
                myUrl: 'https://yt3.ggpht.com/a/AGF-l7_bxwzkHGLOTdWlmToCBYJ7llyd7vtG6_efEA=s48-c-k-c0xffffffff-no-rj-mo',
                follow: true,
                fullName: 'Ann',
                location: {city: 'Vitebsk', country: 'Belarus'}
            },
        ]
    )}

    return <div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.myUrl} className={styles.userFoto}/>
                </div>
                <div>
{u.follow
    ? <button onClick={() => props.unfollow(u.id)}>unfollow</button>
    : <button onClick={() => props.follow(u.id)}>follow</button>}
            </div>
            </span>
            <span>
                <span>
    <div>{u.fullName}</div>
    <div>{u.status}</div>
</span>
            <span>
                  <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
                </span>
        </div>)
        }
    </div>
}
export default Users

