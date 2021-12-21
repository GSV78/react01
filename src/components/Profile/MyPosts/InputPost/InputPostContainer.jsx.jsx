import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile-reducer'
import StoreContex from '../../../../StoreContex';
import InputPost from './InputPost';

const InputPostContainer = (props) => {

    // let addPost = () => {
    //     props.store.dispatch(addPostActionCreator())
    // }

    // let onPostChange = (text) => {
    //     props.store.dispatch(updateNewPostTextActionCreator(text))
    // }

    return (
        <StoreContex.Consumer>{
            (store) => {
                < InputPost updateNewPostText={store.dispatch((text) => updateNewPostTextActionCreator(text))} addPost={store.dispatch(addPostActionCreator())} />
            }
        }
        </StoreContex.Consumer>
    )
}

export default InputPostContainer