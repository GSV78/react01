import css from './Post.module.css'

const Post = (props) => {

    return (
        <div className={css.post}>
            <div className={css.postAvaAndText}>
                <img src='https://lh3.googleusercontent.com/PjEgzixcJoDC7-aeaVEOX6splcOvnDqlmb-dqtE5LT4kZ2qVSlPhH7SGiXMQWmqKyKs' />
                <p> {props.message} </p>
            </div>
            <div>
                <span>like: {props.likesCount} </span>
            </div>
        </div>
    );
}

export default Post