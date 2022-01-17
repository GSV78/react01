import { stopSubmit } from 'redux-form'
import { authAPI } from './../api/api'

const SET_AUTH_USER_DATA = 'samurai_network/auth/SET_AUTH_USER_DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }
}

const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_AUTH_USER_DATA, payload: { id, email, login, isAuth } })

export const getAuthUserData = () => {
    return async (dispatch) => {
        let data = await authAPI.authMe()
        if (data.resultCode === 0) {
            let { id, email, login } = data.data
            dispatch(setAuthUserData(id, email, login, true));
        }
    }
}

export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        let data = await authAPI.authLogin(email, password, rememberMe)
        if (data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
            let action = stopSubmit('login', { _error: message })
            dispatch(action)
        }
    }
}

export const logout = (email, password, rememberMe) => {
    return async (dispatch) => {
        let data = await authAPI.authLogout(email, password, rememberMe)
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}

export default authReducer

