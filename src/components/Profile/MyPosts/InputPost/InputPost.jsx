import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile-reducer'
import css from './InputPost.module.css'

const InputPost = (props) => {

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={css.inputPost}>
            <textarea onChange={onPostChange} value={props.newPostText} />
            <button onClick={addPost}>Запостить</button>
        </div>
    )
}

export default InputPost