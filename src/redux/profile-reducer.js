import { profileAPI } from './../api/api'

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    userProfile: null,
    status: '',
    postsData: [
        { id: 2, message: 'Йоу-йоу!!! 42!', likesCount: 11 },
        { id: 1, message: 'Привет! Я пишу код!', likesCount: 15 },
    ],
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case (ADD_POST): {
            let newPost = {
                id: state.postsData.length + 1,
                message: action.inputPost,
                likesCount: 0,
            };
            return {
                ...state,
                postsData: [newPost, ...state.postsData],
            }
        }
        case (SET_USER_PROFILE): {
            return {
                ...state,
                userProfile: action.userProfile,
            }
        }
        case (SET_STATUS): {
            return {
                ...state,
                status: action.status,
            }
        }
        default:
            return state

    }
}

export const addPost = (inputPost) => ({ type: ADD_POST, inputPost })
const setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, userProfile })
const setStatus = (status) => ({ type: SET_STATUS, status })

export const getProfileThunkCreator = (id) => {
    return (dispatch) => {
        profileAPI.getProfile(id)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}

export const getStatus = (id) => {
    return (dispatch) => {
        profileAPI.getStatus(id)
            .then(data => {
                dispatch(setStatus(data))
            })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}

export default profileReducer