import React from 'react';
import { addPost, updateNewPostText, setUserProfile } from './../../redux/profile-reducer'
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import Profile from './Profile'
import axios from 'axios';

class ProfileAPIComponent extends React.Component {
    componentDidMount() {

        let userId = this.props.match ? this.props.match.params.userId : 2;
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }
    render() {
        return (
            <Profile {...this.props} />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

const ProfileMatch = (props) => {
    let match = useMatch("/profile/:userId");
    return (
        <ProfileAPIComponent {...props} match={match} />
    )
}

const ProfileContainer = connect(mapStateToProps, { addPost, updateNewPostText, setUserProfile })(ProfileMatch)

export default ProfileContainer

