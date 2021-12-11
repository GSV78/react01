import { NavLink } from 'react-router-dom'
import css from './Dialogues.module.css'
import icon from './icon.svg'

const Dialog = (props) => {
    return (
        <div className={css.dialog}>
            <NavLink to={'/dialogues/' + props.id} className={navData => navData.isActive ? css.active : css.disactive}><img src={icon} />{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={css.message}>
            {props.message}
        </div>
    )
}

const Dialogues = (props) => {
    let dialoguesData = [
        { id: 1, name: 'Ольга' },
        { id: 2, name: 'Тоня' },
        { id: 3, name: 'Санёк' },
        { id: 4, name: 'Серега' },
        { id: 5, name: 'Леха' },
        { id: 6, name: 'Максим' },
    ]

    let dialogElements = dialoguesData.map(el => <Dialog id={el.id} name={el.name} />)

    let messagesData = [
        { id: 1, message: 'Привет!' },
        { id: 2, message: 'Йо-йо!!' },
        { id: 3, message: 'Ыыыыы!!!' },
        { id: 4, message: 'Крутяк!' },
        { id: 5, message: 'Пока!' },
    ]

    let messagesElements = messagesData.map(el => <Message message={el.message} />)

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