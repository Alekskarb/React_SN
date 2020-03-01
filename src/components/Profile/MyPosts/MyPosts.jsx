import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';
import {Field} from "redux-form";

const MyPosts = (props) => {


    const PostForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <Field> like </Field>
            </form>
        )
    };


    let postsElements = props.myPost.map((p) => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>);
    let newPostTexts = props.newPostText;

    let addPost = () => {
        props.onAddPost();
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updatePostText(text);
    };

    

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
};

export default MyPosts;

