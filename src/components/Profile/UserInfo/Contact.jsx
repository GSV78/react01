import css from './UserInfo.module.css';

const Contact = (props) => {
    return (<div>
        <span className={css.contactTitle}> {props.title}:</span>
        <span className={css.contactValue} >{props.value}</span>
    </div>
    )
}

export default Contact