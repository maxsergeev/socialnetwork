import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
    return (
        
          <div>My posts
            <div>
              <textarea></textarea>
              <button>Add post</button>
              <button>Post Remove</button>
            </div>
            <div>New post</div>
            <div className={style.post}>
              <Post message='Hi, how r u?' likeCount='23'/> 
              <Post message="It's my first post" likeCount='11'/> 

            </div>
          </div>
    );
}

export default MyPosts;