import css from './Users.module.css'

const Users = (props) => {
    if (props.users.length == 0) {
        props.setUsers([
            { id: 1, photoUrl: 'https://lh3.googleusercontent.com/PjEgzixcJoDC7-aeaVEOX6splcOvnDqlmb-dqtE5LT4kZ2qVSlPhH7SGiXMQWmqKyKs', following: true, fullName: 'Ольга', status: 'Я босс!', location: { city: 'Владимир', country: 'Россия' } },
            { id: 2, photoUrl: 'https://lh3.googleusercontent.com/PjEgzixcJoDC7-aeaVEOX6splcOvnDqlmb-dqtE5LT4kZ2qVSlPhH7SGiXMQWmqKyKs', following: false, fullName: 'Тоня', status: 'Я красавица!', location: { city: 'Владимир', country: 'Россия' } },
            { id: 3, photoUrl: 'https://lh3.googleusercontent.com/PjEgzixcJoDC7-aeaVEOX6splcOvnDqlmb-dqtE5LT4kZ2qVSlPhH7SGiXMQWmqKyKs', following: true, fullName: 'Санек', status: 'Я Дед Мороз! Я Дед Мороз! Я Дед Мороз! Я Дед Мороз! Я Дед Мороз! Я Дед Мороз! Я Дед Мороз! Я Дед Мороз!', location: { city: 'Владимир', country: 'Россия' } },
            // { id: 4, photoUrl: 'https://lh3.googleusercontent.com/PjEgzixcJoDC7-aeaVEOX6splcOvnDqlmb-dqtE5LT4kZ2qVSlPhH7SGiXMQWmqKyKs', following: false, fullName: 'Сергей', status: 'Я добрый волшебник!', location: { city: 'Владимир', country: 'Россия' } },
        ])
    }
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
                </div>)}
        </div>
    )
}

export default Users