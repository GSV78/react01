import React from 'react';
import InputPostContainer from './InputPost/InputPostContainer.jsx';
import css from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    let posts = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id} />)

    return (
        <div className={css.myPost}>
            <InputPostContainer
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