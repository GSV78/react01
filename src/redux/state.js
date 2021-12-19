const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let store = {
    _callSubscriber() {
        console.log('no subscribers (observers)');
    },
    _state: {
        currentUser: { userName: 'Сергей', age: '43', img: './../../img/avatar1.jpg' },
        navPage: {
            friends: [
                { friendsName: 'Ольга', img: './../../img/avatar2.jpg' },
                { friendsName: 'Тоня', img: './../../img/avatar3.jpg' },
                { friendsName: 'Санек', img: './../../img/avatar4.jpg' },
                { friendsName: 'Леха', img: './../../img/avatar5.jpg' },
            ],
            numberOfFriends: { numberOfFriends: 4 }
        },
        profilePage: {
            postsData: [
                { id: 1, message: 'Привет! Я пишу код!', likesCount: 15 },
                { id: 2, message: 'Йоу-йоу!!! 42!', likesCount: 11 },
            ],
            newPostText: '',
        },
        messagesPage: {
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
        },
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let posts = this._state.profilePage.postsData;
            let newPost = {
                id: posts.length + 1,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this.getState());
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this.getState());
        } else if (action.type === ADD_MESSAGE) {
            let messages = this._state.messagesPage.messagesData;
            let newMessage = {
                id: messages.length + 1,
                message: this._state.messagesPage.newMessageText,
            };
            messages.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this.getState());
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.newMess;
            this._callSubscriber(this.getState());
        }
    },
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMess: text })

export default store;

