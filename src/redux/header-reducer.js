const SET_TIME = 'samurai_network/header/SET_TIME'

let initialState = {
    currentTime: null,
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TIME:
            return {
                ...state,
                currentTime: action.time,
                currentDate: action.date,
            }

        default:
            return state;
    }
}

export const setTime = (time, date) => ({ type: SET_TIME, time, date })

export default headerReducer