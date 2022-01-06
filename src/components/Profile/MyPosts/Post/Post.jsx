import css from './Post.module.css'
import ava from './../../../../assets/images/avatar1.jpg'

const Post = (props) => {

    return (
        <div className={css.post}>
            <div className={css.postAvaAndText}>
                <img alt='ava' src={ava} />
                <p> {props.message} </p>
            </div>
            <div>
                <span>like: {props.likesCount} </span>
            </div>
        </div>
    );
}

export default Post