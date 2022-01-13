import React from 'react';
import { setCurrentPage, requestUsersThunkCreator, followThunkCreator, unfollowThunkCreator } from './../../redux/users-reducer'
import { connect } from 'react-redux';
import Users from './Users'
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { getPagesSize, getUsers, getCurrentPage, getTotalCount, getIsFetching, getFollowingInProgress } from '../../redux/users-selectors';


class UsersAPIComponent extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        this.props.requestUsers(this.props.pagesSize, this.props.currentPage)
    }
    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        this.props.requestUsers(this.props.pagesSize, page)
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
        users: getUsers(state),
        pagesSize: getPagesSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        setCurrentPage,
        requestUsers: requestUsersThunkCreator, follow: followThunkCreator, unfollow: unfollowThunkCreator
    }),
    // withAuthRedirect,
)(UsersAPIComponent)


