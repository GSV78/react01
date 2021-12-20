// import profileReducer from "./profile-reducer";
// import dialoguesReducer from "./dialogues-reducer";
// import navReducer from "./nav-reducer";

// let store = {
//     _callSubscriber() {
//         console.log('no subscribers (observers)');
//     },
//     _state: {
//         navPage: {
//             // friends: [
//             //     { friendsName: 'Ольга', img: './../../img/avatar2.jpg' },
//             //     { friendsName: 'Тоня', img: './../../img/avatar3.jpg' },
//             //     { friendsName: 'Санек', img: './../../img/avatar4.jpg' },
//             //     { friendsName: 'Леха', img: './../../img/avatar5.jpg' },
//             // ],
//             // numberOfFriends: { numberOfFriends: 4 }
//         },
//         // profilePage: {
//         //     currentUser: { userName: 'Сергей', age: '43', img: './../../img/avatar1.jpg' },
//         //     postsData: [
//         //         { id: 1, message: 'Привет! Я пишу код!', likesCount: 15 },
//         //         { id: 2, message: 'Йоу-йоу!!! 42!', likesCount: 11 },
//         //     ],
//         //     newPostText: '',
//         // },
//         // messagesPage: {
//         //     dialoguesData: [
//         //         { id: 1, name: 'Ольга' },
//         //         { id: 2, name: 'Тоня' },
//         //         { id: 3, name: 'Санёк' },
//         //         { id: 4, name: 'Серега' },
//         //         { id: 5, name: 'Леха' },
//         //         { id: 6, name: 'Максим' },
//         //     ],
//         //     messagesData: [
//         //         { id: 1, message: 'Привет!' },
//         //         { id: 2, message: 'Йо-йо!!' },
//         //         { id: 3, message: 'Ыыыыы!!!' },
//         //         { id: 4, message: 'Крутяк!' },
//         //         { id: 5, message: 'Пока!' },
//         //     ],
//         //     newMessageText: '',
//         // },
//     },

//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },

//     dispatch(action) {

//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.messagesPage = dialoguesReducer(this._state.messagesPage, action)
//         this._state.navPage = navReducer(this._state.navPage, action)

//         this._callSubscriber(this.getState());
//     },
// }

// export default store;

