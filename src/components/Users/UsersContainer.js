import { followAC, unfollowAC, setUsersAC } from './../../redux/users-reducer'
import { connect } from 'react-redux';
import Users from './Users'

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
    }
}
debugger
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer