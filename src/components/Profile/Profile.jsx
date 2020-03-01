import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostContainer from "./MyPosts/PostContainer";

const Profile = (props) => {

    return (
        <div >
            <ProfileInfo profile={props.profile} status={props.status}
                         updateUserStatus={props.updateUserStatus}/>
            <PostContainer
            />
        </div>
    )
};

export default Profile;
