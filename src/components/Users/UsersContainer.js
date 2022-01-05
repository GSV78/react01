import React from 'react';
import { follow, unfollow, setUsers, setTotalCount, setCurrentPage, toggleIsFetching, toggleIsFollowingProgress } from './../../redux/users-reducer'
import { connect } from 'react-redux';
import Users from './Users'
import Preloader from '../common/Preloader/Preloader';
import { userAPI } from '../../api/api';

class UsersAPIComponent extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        this.props.toggleIsFetching(true)

        userAPI.getUsers(this.props.pagesSize, this.props.currentPage)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalCount(data.totalCount);
            })
    }
    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)
        userAPI.getUsers(this.props.pagesSize, page)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalCount(data.totalCount);
            })
    }
    render() {
        return (<div>
            <Preloader isFetching={this.props.isFetching} />
            <Users
                users={this.props.users}
                totalCount={this.props.totalCount}
                pagesSize={this.props.pagesSize}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
                onPageChanged={this.onPageChanged}
                toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
            />
        </div>)
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pagesSize: state.usersPage.pagesSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => {
//             dispatch(followAC(userID))
//         },
//         unfollow: (userID) => {
//             dispatch(unfollowAC(userID))
//         },
//         setUsersList: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setTotalCount: (totalCount) => {
//             dispatch(setTotalCountAC(totalCount))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         },
//     }
// }


export default connect(mapStateToProps, { follow, unfollow, setUsers, setTotalCount, setCurrentPage, toggleIsFetching, toggleIsFollowingProgress })(UsersAPIComponent)