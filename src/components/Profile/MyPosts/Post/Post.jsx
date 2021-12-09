import css from './Post.module.css'

const Post = (props) => {
    return (
        <div className={css.post}>
            <div className={css.postAvaAndText}>
                <img src='https://placepic.ru/wp-content/uploads/2019/02/348235-1.jpg' />
                <p> {props.message} </p>
            </div>
            <div>
                <span>like: {props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post