import css from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={css.myPost}>
            My posts
            <div className={css.newPosts}>
                <textarea />
                <button>Send</button>

            </div>
            <Post message='Hi, how are you?' likesCount='15' />
            <Post message="It's my first project!" likesCount='12' />
        </div>
    );
}

export default MyPosts