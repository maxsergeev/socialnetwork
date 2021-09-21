import React from 'react';
import style from './Post.module.css';
import postPhoto from './../../../../images/profile-user.svg'

const Post = (props) => {
    return (
        <div className={style.item}>
            
                <img src={postPhoto}/>
            
            {props.message} 
            <div>
                <span>like</span>
                <span className={style.likeCount}> {props.likeCount}</span>
            </div>

        </div>
    );
}

export default Post;