const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialoguesReducer = (state, action) => {
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
