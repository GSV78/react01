const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNTS = 'SET_TOTAL_COUNTS';
const SET_CURRENT_PAGE = 'SET_ACTIVE_PAGE';


let initialState = {
    users: [],
    pagesSize: 15,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
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
            return (
                {
                    ...state,
                    users: action.users
                }
            )
        }
        case (SET_TOTAL_COUNTS): {
            return (
                {
                    ...state,
                    totalCount: action.totalCount
                }
            )
        }
        case (SET_CURRENT_PAGE): {
            return (
                {
                    ...state,
                    currentPage: action.currentPage
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
export const setTotalCountAC = (totalCount) => ({ type: SET_TOTAL_COUNTS, totalCount })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })

export default usersReducer