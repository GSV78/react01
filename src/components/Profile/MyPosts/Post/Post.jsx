import css from './Post.module.css'

const Post = (props) => {
    let onDelete = () => {
        props.deletePost(props.id)
    }
    return (
        <div className={css.post}>
            <div className={css.postAvaAndText}>
                <img alt='ava' src={props.ava} />
                <p> {props.message} </p>
            </div>
            <div className={css.likeAndDelete}>
                <span>like: {props.likesCount} </span>
                <button onClick={onDelete}>Удалить</button>
            </div>
        </div>
    );
}

export default Post