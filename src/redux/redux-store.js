import { createStore, combineReducers } from 'redux';
import profileReducer from './profile-reducer';
import dialoguesReducer from './dialogues-reducer';
import navReducer from './nav-reducer'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    navPage: navReducer,
});

let store = createStore(reducers);

window.store = store;

export default store