import { addPost, updateNewPostText } from './../../redux/profile-reducer'
import { connect } from 'react-redux';
import Profile from './Profile'

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addPost: () => {
//             dispatch(addPostActionCreator());
//         },
//         updateNewPostText: (text) => {
//             dispatch(updateNewPostTextActionCreator(text));
//         }

//     }
// }

const ProfileContainer = connect(mapStateToProps, { addPost, updateNewPostText })(Profile)

export default ProfileContainer

