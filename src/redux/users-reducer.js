const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: []
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case (FOLLOW_USER):
            return (
                {
                    ...state,
                    users: state.users.map(el => {
                        if (el.id == action.userID) {
                            return ({ ...el, followed: true })
                        } else return el
                    })
                }
            )

        case (UNFOLLOW_USER):
            return (
                {
                    ...state,
                    users: state.users.map(el => {
                        if (el.id == action.userID) {
                            return { ...el, followed: false }
                        } else return el
                    })
                }
            )

        case (SET_USERS): {
            console.log('dispatch', [...state.users, ...action.users]);
            return (
                {
                    ...state,
                    users: action.users
                }
            )
        }
        default:
            return state
    }
}

export const followAC = (userID) => ({ type: FOLLOW_USER, userID })
export const unfollowAC = (userID) => ({ type: UNFOLLOW_USER, userID })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer