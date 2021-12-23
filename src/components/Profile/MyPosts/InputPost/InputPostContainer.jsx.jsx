import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile-reducer'
import InputPost from './InputPost';

const InputPostContainer = (props) => {
    let addPost = () => {
        props.addPost(addPostActionCreator())
    }

    let onPostChange = (text) => {
        props.updateNewPostText(updateNewPostTextActionCreator(text))
    }

    return (
        < InputPost
            updateNewPostText={onPostChange}
            addPost={addPost}
            newPostText={props.newPostText}
        />
    )
}

export default InputPostContainer