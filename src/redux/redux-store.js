import { createStore, combineReducers, applyMiddleware } from 'redux';
import profileReducer from './profile-reducer';
import dialoguesReducer from './dialogues-reducer';
import navReducer from './nav-reducer'
import usersReducer from './users-reducer';
import headerReducer from './header-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    headerPage: headerReducer,
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    navPage: navReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store