import { rerenderEntireTree } from "../render";

let state = {
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
}

export let addPost = () => {
    let posts = state.profilePage.postsData;
    let newPost = {
        id: posts.length + 1,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export let addMessage = () => {
    let messages = state.messagesPage.messagesData;
    let newMessage = {
        id: messages.length + 1,
        message: state.messagesPage.newMessageText,
    };
    messages.push(newMessage);
    state.messagesPage.newMessageText = '';
    rerenderEntireTree(state);
}

export let updateNewMessageText = (newMess) => {
    state.messagesPage.newMessageText = newMess;
    rerenderEntireTree(state);
}

export default state