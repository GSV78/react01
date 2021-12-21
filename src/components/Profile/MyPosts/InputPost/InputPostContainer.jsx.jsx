import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile-reducer'
import InputPost from './InputPost';

const InputPostContainer = (props) => {
    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        < InputPost updateNewPostText={onPostChange} addPost={addPost} newPostText={props.store.getState().profilePage.newPostText} />
    )
}

export default InputPostContainer