import css from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    let posts = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} />)

    return (
        <div className={css.myPost}>
            <h3> Мои посты</h3>
            <div className={css.newPosts}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Запостить</button>
                </div>
            </div>
            {
                posts
            }
        </div>
    );
}

export default MyPosts