import { profileAPI } from './../api/api'

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
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
        case (DELETE_POST): {
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id != action.postId),
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
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
const setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, userProfile })
const setStatus = (status) => ({ type: SET_STATUS, status })

export const getProfileThunkCreator = (id) => {
    return async (dispatch) => {
        let data = await profileAPI.getProfile(id)
        dispatch(setUserProfile(data))
    }
}

export const getStatus = (id) => {
    return async (dispatch) => {
        let data = await profileAPI.getStatus(id)
        dispatch(setStatus(data))
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        let data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}

export default profileReducer