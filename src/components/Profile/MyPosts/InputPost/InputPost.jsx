import React from 'react'
import css from './InputPost.module.css'

const InputPost = (props) => {
    let newPost = React.createRef()

    let sendNewMessage = () => {
        props.store.addPost();
    }

    let onPostChange = () => {
        props.store.updateNewPostText(newPost.current.value);
    }

    return (
        <div className={css.inputPost}>
            <textarea onChange={onPostChange} ref={newPost} value={props.newPostText} />
            <button onClick={sendNewMessage}>Запостить</button>
        </div>
    )
}

export default InputPost