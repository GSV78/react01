const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    currentUser: { userName: 'Сергей', age: '43', img: './../../img/avatar1.jpg' },
    postsData: [
        { id: 1, message: 'Привет! Я пишу код!', likesCount: 15 },
        { id: 2, message: 'Йоу-йоу!!! 42!', likesCount: 11 },
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
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