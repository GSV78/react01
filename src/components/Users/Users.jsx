import * as axios from 'axios'
import css from './Users.module.css'
import userPhoto from '../../asets/images/avatar2.jpg'

const Users = (props) => {
    debugger
    if (props.users.length === 0) {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => (
                props.setUsers(response.data.items)
            ))
    }
    return (
        <div className={css.usersInner}>
            {
                props.users.map(el => <div key={el.id} className={css.user}>
                    <div className={css.avaAndButton}>
                        <div>
                            <img src={el.photos.small != null ? el.photos.small : userPhoto} />
                        </div>
                        <div>
                            {el.followed
                                ? <button onClick={() => { props.unfollow(el.id) }}>Отписаться</button>
                                : <button onClick={() => { props.follow(el.id) }}>Подписаться</button>}
                        </div>
                    </div>
                    <div className={css.main}>
                        <div>{el.name}</div>
                        <p>{el.status}</p>
                    </div>
                    <div className={css.location}>
                        <div>{'el.location.city'}</div>
                        <div>{'el.location.country'}</div>
                    </div>
                </div>)}
        </div>
    )
}

export default Users