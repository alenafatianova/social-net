import { appReducer } from './app-reducer';
import { UsersReducer } from './users-reducer';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import {ProfileReducer} from './profile-reducer'
import {DialogsReducer} from './dialogs-reducer'
import {NavbarReducer} from './navbar-reducer'
import { authReducer } from './auth-reducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'



let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    navbar: NavbarReducer,
    usersPage:  UsersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

export type StateType = ReturnType<typeof reducers>


let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store;
