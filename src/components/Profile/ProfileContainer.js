import React from 'react';
import { addPost, deletePost, getProfileThunkCreator, getStatus, updateStatus, savePhoto } from './../../redux/profile-reducer'
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import Profile from './Profile'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileAPIComponent extends React.Component {
    refreshProfile() {
        let userId = this.props.match ? this.props.match.params.userId : this.props.currentUserId;
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps) {
        if (this.props.match !== prevProps.match) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props} isOwner={!this.props.match} />
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
        getStatus, updateStatus, savePhoto
    }),
    withAuthRedirect,
)(ProfileMatch)