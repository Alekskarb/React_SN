import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return <div  className={s.item}>
             <img src='https://cdn.pixabay.com/photo/2016/09/22/16/38/avatar-1687700_960_720.jpg' alt={'avatar'}/>
              {props.message}
              <div>
              <span>{props.likesCount} like</span>
              </div>
                </div>              
};

export default Post;