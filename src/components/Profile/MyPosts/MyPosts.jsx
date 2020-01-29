import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = (props) => {

    let postsElements = props.myPost.map((p) => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>);
    let newPostTexts = props.newPostText;

    let addPost = () => {
        props.onAddPost();
    }

    let onPostChange= (e)=> {
        let text = e.target.value;
        props.updatePostText(text);
        // let action = {type: 'UPDATE-POST-TEXT', newText: text}
    }

    return <div className={s.postsBlock}>
        <h3> My posts </h3>
        <div>
            <textarea onChange={onPostChange} value={newPostTexts}/>
            <div>
                <button onClick={addPost}>ADD post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;