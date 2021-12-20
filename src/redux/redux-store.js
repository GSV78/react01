import { createStore, combineReducers } from 'redux';
import profileReducer from './profile-reducer';
import dialoguesReducer from './dialogues-reducer';
import navReducer from './nav-reducer'

let reducers = combineReducers({
    profileReducer: profileReducer,
    dialoguesReducer: dialoguesReducer,
    navReducer: navReducer,
});

let store = createStore(reducers);

export default store