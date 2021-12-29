const SET_TIME = 'SET_TIME'

let initialState = {
    currentTime: null,
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TIME:
            return {
                ...state,
                currentTime: action.time,
            }

        default:
            return state;
    }
}

export const setTimeAC = (time) => ({ type: SET_TIME, time })

export default headerReducer