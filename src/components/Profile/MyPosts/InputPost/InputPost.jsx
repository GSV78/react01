import React from 'react'
import { updateNewPostText } from '../../../../redux/state';
import css from './InputPost.module.css'
// import icon from './icon.svg'

const InputPost = (props) => {
    console.log(props);

    let newPost = React.createRef()

    let sendNewMessage = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPost.current.value;
        updateNewPostText(text);
    }

    return (
        <div className={css.inputPost}>
            <textarea onChange={onPostChange} ref={newPost} value={props.newPostText} />
            <button onClick={sendNewMessage}>Запостить</button>
        </div>
    )
}

export default InputPost