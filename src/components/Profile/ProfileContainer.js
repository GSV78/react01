import React from 'react';
import { addPost, updateNewPostText, setUserProfile, getProfileThunkCreator } from './../../redux/profile-reducer'
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import Profile from './Profile'



class ProfileAPIComponent extends React.Component {
    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : this.props.currentUserID;
        this.props.getProfile(userId)
    }
    render() {
        return (
            <Profile {...this.props} />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        currentUserID: state.auth.id
    }
}

const ProfileMatch = (props) => {
    let match = useMatch("/profile/:userId");
    return (
        <ProfileAPIComponent {...props} match={match} />
    )
}

const ProfileContainer = connect(mapStateToProps, {
    addPost, updateNewPostText, setUserProfile,
    getProfile: getProfileThunkCreator
})(ProfileMatch)

export default ProfileContainer

