import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let postsElements = props.myPost.map((p) => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>);
    let addPost = () => {props.onAddPost();};
    let onPostChange = (e) => {let text = e.target.value;props.updatePostText(text);};
    let newPostTexts = props.newPostText;

    return <div className={s.postsBlock}>
        <h3> My posts </h3>
        <div>
            <ReduxPostForm/>
            {/*<textarea onChange={onPostChange} value={newPostTexts}/>*/}
        </div>
        <div>
            <button onClick={addPost}> ADD post </button>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
};

const PostForm = (props)=> {
  return <div>
      <form onSubmit={props.handleSubmit}>
          <div>
              <Field placeholder={'add post'} name={'newPostTexts'} component={'textarea'}/>
          </div>
      </form>
  </div>
};
const ReduxPostForm = reduxForm({form: 'post'})(PostForm);

export default MyPosts;

