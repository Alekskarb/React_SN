import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';


const MyPosts = (props) => {

    let postsElements = props.myPost.map((p) => <Post message={p.message}
                                                      likesCount={p.likesCount}/>
    );
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = (event) => {
        let text = event.target.value;
        props.postChange(text);
    }

    return <div className={s.postsBlock}>
        <h3> My posts </h3>
        <div>
            <textarea onChange={onPostChange} ref={newPostElement}
                      value={props.newPostText}/>
            <div>
                <button onClick={onAddPost}>ADD post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;