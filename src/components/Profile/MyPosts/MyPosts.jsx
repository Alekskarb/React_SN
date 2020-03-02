import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let postsElements = props.myPost.map((p) => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>);
    let addPost = (e) => {
        props.onAddPost(e.postFormMess);
    };

    return <div className={s.postsBlock}>
        <h3> My posts </h3>
        <div>
            <ReduxPostForm onSubmit={addPost}/>
            {/*<textarea onChange={onPostChange} value={newPostTexts}/>*/}
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
              <Field placeholder={'add post'} name={'postFormMess'} component={'textarea'}/>
              <div>
                  <button> ADD post </button>
              </div>
          </div>
      </form>
  </div>
};
const ReduxPostForm = reduxForm({form: 'reduxPostForm'})(PostForm);

export default MyPosts;

