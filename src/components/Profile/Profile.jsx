import React from 'react';
import style from './Profile.module.css';
import profilePhoto from './../../images/profile.png'
import MyPosts from './MyPosts/MyPosts';
const Profile = () => {
    return (
        <div className={style.content}>
          <div>
            <img src={profilePhoto}/>
          </div>
          <div>ava+desc</div>
          <MyPosts />
      </div>
    );
}

export default Profile;