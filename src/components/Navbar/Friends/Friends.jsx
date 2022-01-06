import css from './Friends.module.css';

const Friends = (props) => {
    return (
        <div className={css.friend}>
            <p> {props.friendsName} </p>
            <img alt='icon' />
        </div>
    )
}

export default Friends