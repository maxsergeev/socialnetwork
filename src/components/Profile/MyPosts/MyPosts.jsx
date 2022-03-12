import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post'

const posts = [
    {message: "Hi, how r u?", likeCount: "23"},
    {message: "It's my first post", likeCount: "11"}
]

const MyPosts = () => {

    const postElements = posts.map( p => (<Post message={p.message} likeCount={p.likeCount}/>))

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
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;