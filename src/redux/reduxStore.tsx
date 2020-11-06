import { combineReducers, createStore } from 'redux'
import {ProfileReducer} from './ProfileReducer'
import {DialogsReducer} from './DialogsReducer'
import {NavbarReducer} from './NavbarReducer'

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    navbar: NavbarReducer
})

let store = createStore(reducers);

export default store;

