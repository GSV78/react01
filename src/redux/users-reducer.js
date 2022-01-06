import { userAPI } from './../api/api'

const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNTS = 'SET_TOTAL_COUNTS';
const SET_CURRENT_PAGE = 'SET_ACTIVE_PAGE';
const TOGGLE_IS_FETCING = 'TOGGLE_IS_FETCING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [],
    pagesSize: 15,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
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
        case (TOGGLE_IS_FETCING): {
            return (
                {
                    ...state,
                    isFetching: action.isFetching
                }
            )
        }
        case (TOGGLE_IS_FOLLOWING_PROGRESS): {
            return (
                {
                    ...state,
                    followingInProgress: action.isFetching
                        ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(id => id != action.userId)
                }
            )
        }
        default:
            return state
    }
}

export const followSuccess = (userID) => ({ type: FOLLOW_USER, userID })
export const unfollowSuccess = (userID) => ({ type: UNFOLLOW_USER, userID })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNTS, totalCount })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCING, isFetching })
export const toggleIsFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const getUsersThunkCreator = (pagesSize, currentPage) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))

        userAPI.getUsers(pagesSize, currentPage)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalCount(data.totalCount));
            })
    }
}

export const followThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, id))
        userAPI.follow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(id))
                }
                dispatch(toggleIsFollowingProgress(false, id))
            })
    }
}
export const unfollowThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, id))
        userAPI.unfollow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(id))
                }
                dispatch(toggleIsFollowingProgress(false, id))
            })
    }
}




export default usersReducer