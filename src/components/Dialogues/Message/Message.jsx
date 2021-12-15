import css from './../Dialogues.module.css'
// import icon from './icon.svg'

const Message = (props) => {
    return (
        <div className={css.message}>
            <div className={() => props.myReplic ? css.me : css.notMe} >
                <img />
                {props.message}
            </div >
        </div>
    )
}

export default Message