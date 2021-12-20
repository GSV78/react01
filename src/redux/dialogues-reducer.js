const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
    newMessageText: '',
}

const dialoguesReducer = (state = initialState, action) => {
    switch (action.type) {
        case (ADD_MESSAGE):
            let messages = state.messagesData;
            let newMessage = {
                id: messages.length + 1,
                message: state.newMessageText,
            };
            messages.push(newMessage);
            state.newMessageText = '';
            return state
        case (UPDATE_NEW_MESSAGE_TEXT):
            state.newMessageText = action.newMess;
            return state
        default:
            return state
    }
}

export default dialoguesReducer

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMess: text })
