import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/state'
import css from './InputPost.module.css'

const InputPost = (props) => {
    let newPost = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPost.current.value;
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={css.inputPost}>
            <textarea onChange={onPostChange} ref={newPost} value={props.newPostText} />
            <button onClick={addPost}>Запостить</button>
        </div>
    )
}

export default InputPost