import React from 'react';
import { addPost, deletePost, getProfile, getStatus, updateStatus, savePhoto, saveProfile } from './../../redux/profile-reducer'
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
        if (this.props.match && this.props.match.pathname !== prevProps.match.pathname) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

const ProfileMatch = (props) => {
    const isOwner = (props.currentUserId === props.profilePage.userProfile.userId)
    let match = useMatch("/profile/:userId");
    return (
        <ProfileAPIComponent {...props} match={match} isOwner={isOwner} />
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
        getProfile,
        getStatus, updateStatus, savePhoto, saveProfile
    }),
    withAuthRedirect,
)(ProfileMatch)