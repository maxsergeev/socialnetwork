import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
    return (

        <div className={style.postsBlock}>
            <div>
                <h3>MY POSTS</h3>
            </div>

            <div className={style.postNew}>
                <div className={style.postTextArea}>
                    <textarea></textarea>
                </div>
                <div className={style.postButtons}>
                    <button className={style.btn + ' ' + style.btnAdd}>NEW POST</button>
                    <button className={style.btn + ' ' + style.btnRemove}>REMOVE POST</button>
                </div>

            </div>
            <h4>LAST POSTS</h4>
            <div className={style.post}>
                <Post message='Hi, how r u?' likeCount='23'/>
                <Post message="It's my first post" likeCount='11'/>

            </div>
        </div>
    );
}

export default MyPosts;