import React from 'react';
import { addPost, updateNewPostText, setUserProfile } from './../../redux/profile-reducer'
import { connect } from 'react-redux';
import Profile from './Profile'
import axios from 'axios';

class ProfileAPIComponent extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

const ProfileContainer = connect(mapStateToProps, { addPost, updateNewPostText, setUserProfile })(ProfileAPIComponent)

export default ProfileContainer

