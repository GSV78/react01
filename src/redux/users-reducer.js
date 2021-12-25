const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: []
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case (FOLLOW_USER): {
            return (
                {
                    ...state,
                    users: state.users.map(el => {
                        if (el.id == action.userID) {
                            return ({ ...el, following: true })
                        } else return el
                    })
                }
            )
        }
        case (UNFOLLOW_USER): {
            return (
                {
                    ...state,
                    users: state.users.map(el => {
                        if (el.id == action.userID) {
                            return { ...el, following: false }
                        } else return el
                    })
                }
            )
        }
        case (SET_USERS): {
            debugger
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state
    }
}

export default usersReducer

export const followAC = (userID) => ({ type: FOLLOW_USER, userID })
export const unfollowAC = (userID) => ({ type: UNFOLLOW_USER, userID })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
