import css from './InputMessage.module.css'


const InputMessage = (props) => {

    let onSendNewMessage = () => {
        props.addMessage()
        // props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (event) => {
        let text = event.target.value
        props.updateNewMessageText(text)
        // props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <div className={css.inputMessage}>
            <textarea onChange={onMessageChange} value={props.newMessageText} placeholder='Введите своё сообщение'></textarea>
            <button onClick={onSendNewMessage}>Отправить</button>
        </div>
    )
}

export default InputMessage