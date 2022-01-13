import React from 'react';
import { setCurrentPage, getUsersThunkCreator, followThunkCreator, unfollowThunkCreator } from './../../redux/users-reducer'
import { connect } from 'react-redux';
import Users from './Users'
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class UsersAPIComponent extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        this.props.getUsers(this.props.pagesSize, this.props.currentPage)
    }
    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        this.props.getUsers(this.props.pagesSize, page)
    }
    render() {
        return (<div>
            {this.props.isFetching
                ? <Preloader />
                : null}
            <Users
                users={this.props.users}
                totalCount={this.props.totalCount}
                pagesSize={this.props.pagesSize}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
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
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default compose(
    connect(mapStateToProps, {
        setCurrentPage,
        getUsers: getUsersThunkCreator, follow: followThunkCreator, unfollow: unfollowThunkCreator
    }),
    withAuthRedirect,
)(UsersAPIComponent)


