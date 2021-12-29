import React from 'react';
import { followAC, unfollowAC, setUsersAC, setTotalCountAC, setCurrentPageAC } from './../../redux/users-reducer'
import { connect } from 'react-redux';
import Users from './Users'
import * as axios from 'axios'
import preloader from './../../assets/images/loader.gif'

class UsersAPIComponent extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pagesSize}&page=${this.props.currentPage}`)
            .then(response => {
                debugger
                this.props.setUsersList(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    }
    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pagesSize}&page=${page}`)
            .then(response => {
                this.props.setUsersList(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    }
    render() {
        return <>
            {this.props.isFetching ? <img src={preloader} /> : null}
            <Users
                users={this.props.users}
                totalCount={this.props.totalCount}
                pagesSize={this.props.pagesSize}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
            />
        </>
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)