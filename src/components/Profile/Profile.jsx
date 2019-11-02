import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./MyPosts/PostsContainer";

const Profile = (props) => {

    return (
        <div >
            <ProfileInfo/>
            <PostsContainer/>
        </div>
    )
}
export default Profile;