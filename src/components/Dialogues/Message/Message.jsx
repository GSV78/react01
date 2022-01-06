import css from './../Dialogues.module.css'
// import icon from './icon.svg'

const Message = (props) => {
    return (
        <div className={css.message}>
            <img alt='ava' />
            <p> {props.message} </p>

        </div>
    )
}

export default Message