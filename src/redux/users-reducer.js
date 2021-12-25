const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        { id: 1, photoUrl: 'https://lh3.googleusercontent.com/PjEgzixcJoDC7-aeaVEOX6splcOvnDqlmb-dqtE5LT4kZ2qVSlPhH7SGiXMQWmqKyKs', following: true, fullName: 'Ольга', status: 'Я босс!', location: { city: 'Владимир', country: 'Россия' } },
        { id: 2, photoUrl: 'https://lh3.googleusercontent.com/PjEgzixcJoDC7-aeaVEOX6splcOvnDqlmb-dqtE5LT4kZ2qVSlPhH7SGiXMQWmqKyKs', following: false, fullName: 'Тоня', status: 'Я красавица!', location: { city: 'Владимир', country: 'Россия' } },
        { id: 3, photoUrl: 'https://lh3.googleusercontent.com/PjEgzixcJoDC7-aeaVEOX6splcOvnDqlmb-dqtE5LT4kZ2qVSlPhH7SGiXMQWmqKyKs', following: true, fullName: 'Санек', status: 'Я в хлам!', location: { city: 'Владимир', country: 'Россия' } },
        { id: 4, photoUrl: 'https://lh3.googleusercontent.com/PjEgzixcJoDC7-aeaVEOX6splcOvnDqlmb-dqtE5LT4kZ2qVSlPhH7SGiXMQWmqKyKs', following: false, fullName: 'Сергей', status: 'Я не волшебник!', location: { city: 'Владимир', country: 'Россия' } },
    ]
}
const usersReducer = (state = initialState, action) => {
    debugger
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
                            return ({ ...el, following: false })
                        } else return el
                    })
                }
            )
        }
        case (SET_USERS): {
            return { ...state, users: [{ ...state.users, ...action.users }] }
        }
        default:
            return state
    }
}

export default usersReducer

export const followAC = (userID) => ({ type: FOLLOW_USER, userID })
export const unfollowAC = (userID) => ({ type: UNFOLLOW_USER, userID })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
