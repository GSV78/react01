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
    },
}

export let addPost = (postMessage) => {
    let posts = state.profilePage.postsData;
    let newPost = {
        id: posts.length,
        message: postMessage,
        likesCount: 0,
    };
    posts.push(newPost);
    rerenderEntireTree(state);
}

export let addMessage = (message) => {
    let messages = state.messagesPage.messagesData;
    let newMessage = {
        id: messages.length,
        message: message,
    };
    messages.push(newMessage);
    rerenderEntireTree(state);
}

export default state