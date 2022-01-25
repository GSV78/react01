import { profileAPI } from './../api/api'
import { stopSubmit } from 'redux-form'

const ADD_POST = 'samurai_network/profile/ADD-POST';
const DELETE_POST = 'samurai_network/profile/DELETE_POST';
const SET_USER_PROFILE = 'samurai_network/profile/SET_USER_PROFILE';
const SET_STATUS = 'samurai_network/profile/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'samurai_network/profile/SAVE_PHOTO_SUCCESS';
const SAVE_PROFILE_SUCCESS = 'samurai_network/profile/SAVE_PROFILE_SUCCESS';


let initialState = {
    userProfile: {
        aboutMe: null,
        contacts: {},
        fullName: null,
        lookingForAJob: null,
        lookingForAJobDescription: null,
        photos: {},
        userId: null
    },
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
                postsData: state.postsData.filter(p => p.id !== action.postId),
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
        case (SAVE_PHOTO_SUCCESS): {
            return {
                ...state,
                userProfile: {
                    ...state.userProfile,
                    photos: action.photos
                }
            }
        }
        default:
            return state

    }
}

export const addPost = (inputPost) => ({ type: ADD_POST, inputPost })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })
export const saveProfileSuccess = (profile) => ({ type: SAVE_PROFILE_SUCCESS, profile })
const setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, userProfile })
const setStatus = (status) => ({ type: SET_STATUS, status })

export const getProfile = (id) => {

    return async (dispatch) => {
        let data = await profileAPI.getProfileData(id)
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
        try {
            let data = await profileAPI.updateStatus(status)
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        } catch (error) {
            // alert(error), глобальный перехватчик уже не перехватывает эту ошибку
        }
    }
}

export const savePhoto = (file) => {
    return async (dispatch) => {
        let data = await profileAPI.savePhoto(file)
        if (data.resultCode === 0) {
            dispatch(savePhotoSuccess(data.data.photos))
        }
    }
}

export const saveProfile = (profile) => {
    return async (dispatch, getState) => {
        const userId = getState().auth.id
        let data = await profileAPI.saveProfile(profile)

        if (data.resultCode === 0) {
            dispatch(getProfile(userId))
        } else {
            let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
            let action = stopSubmit('profile', { _error: message })
            dispatch(action)
            return Promise.reject(data.messages[0])
        }
    }
}

export default profileReducer