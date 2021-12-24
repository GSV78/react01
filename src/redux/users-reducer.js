const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';

let initialState = {
    users: [
        { id: 1, following: true, fullName: 'Ольга', status: 'Я босс!', location: { city: 'Владимир', country: 'Россия' } },
        { id: 1, following: false, fullName: 'Тоня', status: 'Я красавица!', location: { city: 'Владимир', country: 'Россия' } },
        { id: 1, following: true, fullName: 'Санек', status: 'Я в хлам!', location: { city: 'Владимир', country: 'Россия' } },
        { id: 1, following: false, fullName: 'Сергей', status: 'Я не волшебник!', location: { city: 'Владимир', country: 'Россия' } },
    ]
}

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case (FOLLOW_USER): {
            return (
                {
                    ...state,
                    users: state.users.map(el => {
                        if (el.id == action.userID) {
                            return ([...el, following: true])
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
                            return ([...el, following: false])
                        } else return el
                    })
                }
            )
        }
        default:
            return state
    }
}

export default UsersReducer

export const followAC = () => ({ type: FOLLOW_USER, userID })
export const unfollowAC = () => ({ type: UNFOLLOW_USER, userID })
