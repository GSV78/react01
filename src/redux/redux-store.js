import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import profileReducer from './profile-reducer';
import dialoguesReducer from './dialogues-reducer';
import navReducer from './nav-reducer'
import usersReducer from './users-reducer';
import headerReducer from './header-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from './app-reducer';

let reducers = combineReducers({
    appPage: appReducer,
    headerPage: headerReducer,
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    navPage: navReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store