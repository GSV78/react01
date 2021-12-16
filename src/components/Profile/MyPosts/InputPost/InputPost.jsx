import React from 'react'
import css from './InputPost.module.css'
// import icon from './icon.svg'

const InputPost = (props) => {
    console.log(props);

    let newPost = React.createRef()

    let sendNewMessage = () => {
        props.addPost(newPost.current.value);
        newPost.current.value = ''
    }



    return (
        <div className={css.inputPost}>
            <textarea ref={newPost}></textarea>
            <button onClick={sendNewMessage}>Запостить</button>
        </div>
    )
}

export default InputPost