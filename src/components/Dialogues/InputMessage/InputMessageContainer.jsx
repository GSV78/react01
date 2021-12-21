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
        <InputMessage addMessage={sendNewMessage} updateNewMessageText={onMessageChange} newMessageText={props.store.getState().dialoguesPage.newMessageText} />
    )
}

export default InputMessageContainer