import { createStore, combineReducers } from 'redux';
import profileReducer from './profile-reducer';
import dialoguesReducer from './dialogues-reducer';
import navReducer from './nav-reducer'
import usersReducer from './users-reducer';
import headerReducer from './header-reducer';

let reducers = combineReducers({
    headerPage: headerReducer,
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    navPage: navReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);

export default store