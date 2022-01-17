import css from './Post.module.css'
import ava from './../../../../assets/images/avatar1.jpg'

const Post = (props) => {
    let onDelete = () => {
        props.deletePost(props.id)
    }
    return (
        <div className={css.post}>
            <div className={css.postAvaAndText}>
                <img alt='ava' src={ava} />
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