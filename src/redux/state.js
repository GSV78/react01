let store = {
    _subscriber() {
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
        this._subscriber = observer;
    },
    addPost() {
        let posts = this._state.profilePage.postsData;
        let newPost = {
            id: posts.length + 1,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._subscriber(this.getState());
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._subscriber(this.getState());
    },
    addMessage() {
        let messages = this._state.messagesPage.messagesData;
        let newMessage = {
            id: messages.length + 1,
            message: this._state.messagesPage.newMessageText,
        };
        messages.push(newMessage);
        this._state.messagesPage.newMessageText = '';
        this._subscriber(this.getState());
    },
    updateNewMessageText(newMess) {
        this._state.messagesPage.newMessageText = newMess;
        this._subscriber(this.getState());
    }
}

export default store
