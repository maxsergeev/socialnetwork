import React from 'react';
import style from './ProfileInfo.module.css';
import profilePhoto from './../../../images/profile.png'

const ProfileInfo = () => {
    return (
        <div>
            <div className={style.profilePhoto}>
                <img src={profilePhoto}/>
            </div>
            <div className={style.descriptionBlock}>ava+desc</div>
        </div>
    );
}

export default ProfileInfo;