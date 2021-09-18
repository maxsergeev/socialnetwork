import React from 'react';
import style from './Profile.module.css';
import profilePhoto from './../images/profile.png'
const Profile = () => {
    return (
        <div className={style.content}>
          <div>
            <img src={profilePhoto}/>
          </div>
          <div>ava+desc</div>
          <div>My posts
            <div>New post</div>
            <div className={style.post}>
              <div className={style.item}>post1</div>
              <div className={style.item}>post2</div>
            </div>
            
          </div>
        </div>
    );
}

export default Profile;