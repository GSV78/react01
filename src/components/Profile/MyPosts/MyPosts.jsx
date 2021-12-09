import css from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={css.myPost}>
            My posts
            <div className={css.newPosts}>
                New post
            </div>
            <Post message='Hi, how are you?' />
            <Post message="It's my first project!" />
        </div>
    );
}

export default MyPosts