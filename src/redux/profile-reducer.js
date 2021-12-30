const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    currentUser: { userName: 'Сергей', age: '43', img: './../../img/avatar1.jpg' },
    postsData: [
        { id: 2, message: 'Йоу-йоу!!! 42!', likesCount: 11 },
        { id: 1, message: 'Привет! Я пишу код!', likesCount: 15 },
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
            return {
                ...state,
                newPostText: '',
                postsData: [newPost, ...state.postsData],
            }
        }
        case (UPDATE_NEW_POST_TEXT): {
            return {
                ...state,
                newPostText: action.newText,
            }
        }
        default:
            return state

    }
}

export default profileReducer

export const addPost = () => ({ type: ADD_POST })
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })