import  {Users} from './UsersClassComponent'
import {connect} from 'react-redux'
import {addUserAC, deleteUserAC, setUsersAC, UsersActionType} from '../../redux/UsersReducer'
import { StateType } from '../../redux/reduxStore'
import {UsersListType} from '../../redux/UsersReducer'

let mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage
    }
}
let mapDispatchToProps = (dispatch: (actions: UsersActionType) => void) => {
    return {
        addUserInFriends: (userID: number) => {
            dispatch(addUserAC(userID))
        },
        deleteUser: (userID: number) => {
            dispatch(deleteUserAC(userID))
        },
        setUsers: (usersArray: Array<UsersListType>) => {
            dispatch(setUsersAC(usersArray))
        }
    }
}
export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)
