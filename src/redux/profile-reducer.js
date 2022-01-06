import { userAPI } from './../api/api'

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    userProfile: null,
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
        case (SET_USER_PROFILE): {
            return {
                ...state,
                userProfile: action.userProfile,
            }
        }
        default:
            return state

    }
}


export const addPost = () => ({ type: ADD_POST })
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, userProfile })

export const getProfileThunkCreator = (id) => {
    return (dispatch) => {
        userAPI.getProfile(id)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}

export default profileReducer