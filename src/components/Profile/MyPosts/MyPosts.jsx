import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthTC, requiredFields} from "../../utilites/validators/validators";
import {TextArea} from "../../common/FormsControl/FormsControl";
import store from "../../../Redux/redux-store";

const maxLength10 = maxLengthTC(10);

const PostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'add post'} name={'postFormMess'}
                   component={TextArea}
                   validate={[requiredFields, maxLength10]}
            />
            <div>
                <button> ADD post</button>
            </div>
        </div>
    </form>
};
const ReduxPostForm = reduxForm({form: 'reduxPostForm'})(PostForm);

class MyPosts extends React.Component {

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({a:12})
    //     }, 1000);
    // }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps !== this.props || nextState !== this.state;
    }

    render() {
        console.log('RENDER');
        let postsElements = this.props.myPost.map((p) => <Post message={p.message} key={p.id}
                                                               likesCount={p.likesCount}/>);
        let addPost = (e) => {
            this.props.onAddPost(e.postFormMess);
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
    }
}

export default MyPosts;

