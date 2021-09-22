import React from 'react';
import style from './Post.module.css';
import postPhoto from './../../../../images/profile-user.svg'
import heartLike from './../../../../images/heart-like.svg'

const Post = (props) => {
    return (
        <div className={style.item}>
            <div className={style.itemPhoto}>
                <img src={postPhoto}/>
            </div>
            <div className={style.itemMessage}>
                {props.message}
            </div>
            <div className={style.itemLike}>
                <span><img src={heartLike} alt=""/></span>
                <span className={style.likeCount}> {props.likeCount}</span>
            </div>

        </div>
    );
}

export default Post;