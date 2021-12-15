import css from './Friends.module.css';

const Friends = (props) => {
    return (
        <div className={css.friend}>
            <p> {props.friendsName} </p>
            <img src={props.img} />
        </div>
    )
}

export default Friends