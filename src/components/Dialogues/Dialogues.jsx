import css from './Dialogues.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
// import React from 'react'
import InputMessageContainer from './InputMessage/InputMessageContainer'

const Dialogues = (props) => {

    let dialogElements = props.store.getState().dialoguesPage.dialoguesData.map(el => <Dialog id={el.id} name={el.name} />)

    let messagesElements = props.store.getState().dialoguesPage.messagesData.map(el => <Message message={el.message} myReplic={el.myReplic} />)

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
                <InputMessageContainer
                    store={props.store}
                // newMessageText={props.state.newMessageText}
                // dispatch={props.dispatch}
                />
            </div>
        </div>
    )
}

export default Dialogues