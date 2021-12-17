import React from 'react'
import css from './InputMessage.module.css'
// import icon from './icon.svg'

const InputMessage = (props) => {

    let newMessage = React.createRef()

    let sendNewMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.updateNewMessageText(text)
    }

    return (
        <div className={css.inputMessage}>
            <textarea onChange={onMessageChange} ref={newMessage} value={props.newMessageText}></textarea>
            <button onClick={sendNewMessage}>Отправить</button>
        </div>
    )
}

export default InputMessage