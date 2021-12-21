import css from './InputPost.module.css'

const InputPost = (props) => {

    let onAddPost = () => {
        props.addPost()
        // props.dispatch(addPostActionCreator())
    }

    let onPostChange = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text)
        // props.dispatch(updateNewPostTextActionCreator(text))
    }
    return (
        <div className={css.inputPost}>
            <textarea onChange={onPostChange} value={props.newPostText} />
            <button onClick={onAddPost}>Запостить</button>
        </div>
    )
}

export default InputPost