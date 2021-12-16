import css from './../Dialogues.module.css'
// import icon from './icon.svg'

const Message = (props) => {
    return (
        <div className={css.message}>
            <img />
            <p> {props.message} </p>

        </div>
    )
}

export default Message