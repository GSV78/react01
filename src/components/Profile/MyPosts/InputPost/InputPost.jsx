import React from 'react'
import css from './InputPost.module.css'

const InputPost = (props) => {
    let newPost = React.createRef()

    let addPost = () => {
        props.dispatch({ type: 'ADD-POST' });
    }

    let onPostChange = () => {
        props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: newPost.current.value });
    }

    return (
        <div className={css.inputPost}>
            <textarea onChange={onPostChange} ref={newPost} value={props.newPostText} />
            <button onClick={addPost}>Запостить</button>
        </div>
    )
}

export default InputPost