import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/dialogues-reducer'
import InputMessage from './InputMessage';


const InputMessageContainer = (props) => {

    let sendNewMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <InputMessage addMessage={sendNewMessage} updateNewMessageText={onMessageChange} />
    )
}

export default InputMessageContainer