const ADD_MESSAGE = 'samurai_network/dialogues/ADD-MESSAGE';

let initialState = {
    dialoguesData: [
        { id: 1, name: 'Ольга' },
        { id: 2, name: 'Тоня' },
        { id: 3, name: 'Санёк' },
        { id: 4, name: 'Серега' },
        { id: 5, name: 'Леха' },
        { id: 6, name: 'Максим' },
    ],
    messagesData: [
        { id: 1, message: 'Привет!' },
        { id: 2, message: 'Йо-йо!!' },
        { id: 3, message: 'Ыыыыы!!!' },
        { id: 4, message: 'Крутяк!' },
        { id: 5, message: 'Пока!' },
    ],
}

const dialoguesReducer = (state = initialState, action) => {
    switch (action.type) {
        case (ADD_MESSAGE): {
            let newMessage = {
                id: (state.messagesData).length + 1,
                message: action.inputMessage,
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
            }
        }

        default:
            return state
    }
}

export default dialoguesReducer

export const addMessage = (inputMessage) => ({ type: ADD_MESSAGE, inputMessage })
