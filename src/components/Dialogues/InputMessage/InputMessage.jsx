import React from 'react'
import css from './InputMessage.module.css'
// import icon from './icon.svg'

const InputMessage = (props) => {

    let newMessage = React.createRef()

    let sendNewMessage = () => {
        props.addMessage(newMessage.current.value);
        newMessage.current.value = '';
    }
    return (
        <div className={css.inputMessage}>
            <textarea ref={newMessage}></textarea>
            <button onClick={sendNewMessage}>Отправить</button>
        </div>
    )
}

export default InputMessage