import css from './Users.module.css'

const Users = (props) => {

    let users = props.usersPage.users.map(el => <User />)

    return (
        <div className={css.usersInner}>
            {users}
        </div>
    )
}

export default Users