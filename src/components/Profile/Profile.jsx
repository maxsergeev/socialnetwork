import React from 'react';
import style from './Profile.module.css';
import profilePhoto from './../../images/profile.png'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts/>
        </div>
    );
}

export default Profile;