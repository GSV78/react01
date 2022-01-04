import React from 'react';
import { follow, unfollow, setUsers, setTotalCount, setCurrentPage, toggleIsFetching } from './../../redux/users-reducer'
import { connect } from 'react-redux';
import Users from './Users'
import * as axios from 'axios'

import Preloader from '../common/Preloader/Preloader';

class UsersAPIComponent extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pagesSize}&page=${this.props.currentPage}`,
                {
                    withCredentials: true
                })
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    }
    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pagesSize}&page=${page}`,
                {
                    withCredentials: true
                })
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
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
                onPageChanged={this.onPageChanged}
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


export default connect(mapStateToProps, { follow, unfollow, setUsers, setTotalCount, setCurrentPage, toggleIsFetching })(UsersAPIComponent)