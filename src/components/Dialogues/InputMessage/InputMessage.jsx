import React from 'react'
import css from './InputMessage.module.css'

const InputMessage = (props) => {

    let newMessage = React.createRef()

    let sendNewMessage = () => {
        props.dispatch({ type: 'ADD-MESSAGE' });
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.dispatch({ type: 'UPDATE-NEW-MESSAGE-TEXT', newMess: text });
    }

    return (
        <div className={css.inputMessage}>
            <textarea onChange={onMessageChange} ref={newMessage} value={props.newMessageText}></textarea>
            <button onClick={sendNewMessage}>Отправить</button>
        </div>
    )
}

export default InputMessage