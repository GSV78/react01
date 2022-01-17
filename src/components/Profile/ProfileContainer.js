import React from 'react';
import { addPost, deletePost, getProfileThunkCreator, getStatus, updateStatus } from './../../redux/profile-reducer'
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import Profile from './Profile'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



class ProfileAPIComponent extends React.Component {
    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : this.props.currentUserId;
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }
    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

const ProfileMatch = (props) => {
    let match = useMatch("/profile/:userId");
    return (
        <ProfileAPIComponent {...props} match={match} />
    )
}

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        currentUserId: state.auth.id,
        status: state.profilePage.status,
    }
}

export default compose(
    connect(mapStateToProps, {
        addPost, deletePost,
        getProfile: getProfileThunkCreator,
        getStatus, updateStatus,
    }),
    withAuthRedirect,
)(ProfileMatch)