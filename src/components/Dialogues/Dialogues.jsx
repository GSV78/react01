import css from './Dialogues.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import InputMessage from './InputMessage/InputMessage'
import { Navigate } from 'react-router-dom'

const Dialogues = (props) => {

    let dialogElements = props.dialoguesPage.dialoguesData.map(el => <Dialog key={el.id} id={el.id} name={el.name} />)

    let messagesElements = props.dialoguesPage.messagesData.map(el => <Message key={el.id} message={el.message} />)

    if (!props.isAuth) {
        return <Navigate to={'/login'} />
    }
    return (
        <div className={css.dialoguesInner}>
            <div className={css.dialogues}>
                <div className={css.title}>Диалоги</div>
                {
                    dialogElements
                }
            </div>
            <div className={css.messages}>
                {
                    messagesElements
                }
                <InputMessage
                    addMessage={props.addMessage}
                />
            </div>
        </div>
    )
}

export default Dialogues