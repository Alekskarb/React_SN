import React from 'react';
import s from './Post.module.css';
import person from '../../../../assets/images/persons.png'

const Post = (props) => {

  return <div  className={s.item}>
             <img src={person} alt={'avatar'}/>
              {props.message}
              <div>
              <span>{props.likesCount} like</span>
              </div>
                </div>              
};

export default Post;