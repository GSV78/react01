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
        case (ADD_POST): {
            let newPost = {
                id: state.postsData.length + 1,
                message: state.newPostText,
                likesCount: 0,
            };
            let stateCopy = { ...state };
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.unshift(newPost);
            stateCopy.newPostText = '';
            return stateCopy
        }
        case (UPDATE_NEW_POST_TEXT): {
            let stateCopy = { ...state };
            stateCopy.newPostText = action.newText;
            return stateCopy
        }
        default:
            return state

    }
}

export default profileReducer

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })