import React from 'react';
import InputPost from './InputPost/InputPost.jsx';
import css from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    let posts = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id} />)

    return (
        <div className={css.myPost}>
            <InputPost
                newPostText={props.newPostText}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
            />
            <h3> Мои посты</h3>
            {
                posts
            }
        </div>
    );
}

export default MyPosts