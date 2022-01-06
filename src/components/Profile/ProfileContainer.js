import React from 'react';
import { addPost, updateNewPostText, getProfileThunkCreator } from './../../redux/profile-reducer'
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import Profile from './Profile'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



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

const ProfileMatch = (props) => {
    let match = useMatch("/profile/:userId");
    return (
        <ProfileAPIComponent {...props} match={match} />
    )
}

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        currentUserID: state.auth.id,
    }
}

export default compose(
    connect(mapStateToProps, {
        addPost, updateNewPostText,
        getProfile: getProfileThunkCreator
    }),
    withAuthRedirect,
)(ProfileMatch)