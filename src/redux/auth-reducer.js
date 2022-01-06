import { authAPI } from './../api/api'

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

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
                ...action.data,
                isAuth: true,
            }

        default:
            return state;
    }
}

const setAuthUserData = ({ id, email, login }) => ({ type: SET_AUTH_USER_DATA, data: { id, email, login } })

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(data.data));
                }
            })
    }
}

export default authReducer