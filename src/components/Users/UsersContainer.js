import { followAC, unfollowAC, setUsersAC, setTotalCountAC, setCurrentPageAC } from './../../redux/users-reducer'
import { connect } from 'react-redux';
import Users from './Users'

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pagesSize: state.usersPage.pagesSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
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
        setUsersList: (users) => {
            dispatch(setUsersAC(users))
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)