import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/state'
import css from './InputMessage.module.css'


const InputMessage = (props) => {

    let sendNewMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (event) => {
        let text = event.target.value
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <div className={css.inputMessage}>
            <textarea onChange={onMessageChange} value={props.newMessageText} placeholder='Введите своё сообщение'></textarea>
            <button onClick={sendNewMessage}>Отправить</button>
        </div>
    )
}

export default InputMessage