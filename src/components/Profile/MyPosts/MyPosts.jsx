import React from 'react';
import InputPost from './InputPost/InputPost.jsx';
import css from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    let posts = props.postsData.map(post => <Post ava={props.ava} message={post.message} likesCount={post.likesCount} id={post.id} key={post.id} deletePost={props.deletePost} />)
    return (<>
        <hr />
        <div className={css.myPost}>
            <h3> Мои посты.</h3>
            <InputPost
                addPost={props.addPost}
            />
            {
                posts
            }
        </div>
    </>
    );
}

export default MyPosts