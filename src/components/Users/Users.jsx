import css from './Users.module.css'

const Users = (props) => {
    return (
        <div className={css.usersInner}>
            {
                props.users.map(el => <div key={el.id} className={css.user}>
                    <div className={css.avaAndButton}>
                        <div>
                            <img src={el.photoUrl} />
                        </div>
                        <div>
                            {el.following
                                ? <button onClick={() => { props.unfollow(el.id) }}>Отписаться</button>
                                : <button onClick={() => { props.follow(el.id) }}>Подписаться</button>}
                        </div>
                    </div>
                    <div className={css.main}>
                        <div>{el.fullName}</div>
                        <p>{el.status}</p>
                    </div>
                    <div className={css.location}>
                        <div>{el.location.city}</div>
                        <div>{el.location.country}</div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users