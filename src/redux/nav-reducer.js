let initialState = {
    friends: [
        { friendsName: 'Ольга', img: './../../img/avatar2.jpg' },
        { friendsName: 'Тоня', img: './../../img/avatar3.jpg' },
        { friendsName: 'Санек', img: './../../img/avatar4.jpg' },
        { friendsName: 'Леха', img: './../../img/avatar5.jpg' },
    ],
    numberOfFriends: { numberOfFriends: 4 }
}

const navReducer = (state = initialState, action) => {

    return state
}

export default navReducer