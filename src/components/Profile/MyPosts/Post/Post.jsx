import React from 'react';
import style from './Post.module.css';
const Post = (props) => {
    return (
        <div className={style.item}>
            
                <img src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png" />
            
            {props.message} 
            <div>
                <span>like</span>
                <span className={style.likeCount}> {props.likeCount}</span>
            </div>

        </div>
    );
}

export default Post;