import css from './../Dialogues.module.css'
import icon from './../../../assets/images/avatar3.jpg'

const Message = (props) => {
    return (
        <div className={css.message}>
            <img alt='ava' src={icon} />
            <p> {props.message} </p>

        </div>
    )
}

export default Message