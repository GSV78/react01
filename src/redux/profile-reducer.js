const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';



const profileReducer = (state, action) => {
    switch (action.type) {
        case (ADD_POST):
            let posts = state.postsData;
            let newPost = {
                id: posts.length + 1,
                message: state.newPostText,
                likesCount: 0,
            };
            posts.push(newPost);
            state.newPostText = '';
            return state

        case (UPDATE_NEW_POST_TEXT):
            state.newPostText = action.newText;
            return state
        default:
            return state
    }
}

export default profileReducer

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })