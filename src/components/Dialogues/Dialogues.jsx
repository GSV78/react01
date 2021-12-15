import css from './Dialogues.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogues = (props) => {

    let dialogElements = props.state.dialoguesData.map(el => <Dialog id={el.id} name={el.name} />)

    let messagesElements = props.state.messagesData.map(el => <Message message={el.message} myReplic={el.myReplic} />)

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
            </div>
        </div>
    )
}

export default Dialogues