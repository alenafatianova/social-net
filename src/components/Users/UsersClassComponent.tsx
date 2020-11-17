import React from 'react'
import style from './Users.module.scss'
import axios from 'axios'
import userAvatar from '../../assets/images/userAvatar.jpg'
import { UsersType } from '../../redux/UsersReducer'

export type  ClassPropsType = {
    addUser: (userID: number) => void
    deleteUser: (userID: number) => void
    setUsers: (users: Array<UsersType>) => void
    users: Array<UsersType>  
}

export class Users extends React.Component<{
    addUser: (userID: number) => void, 
    deleteUser: (userID: number) => void,
    setUsers: (users: Array<UsersType>) => void,
    users: Array<UsersType>}, {}> {

    constructor(props: ClassPropsType) {
        super(props) 
         if (this.props.users.length ===  0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
             this.props.setUsers(response.data.items)
            })
        }
    }
    render () {
        return (
            <div>
                {
                this.props.users.map(u => 
                    <div key={u.id}>
                        <span>
                            <div>
                                <img className={style.img} src={u.photos.small != null ? u.photos.small : userAvatar}/>
                            </div>
                            <div>
                                {u.followed 
                                ? <button onClick={() => this.props.addUser(u.id)}>Add to friends</button> 
                                : <button onClick={() => this.props.deleteUser(u.id)}>Your friend</button>}
                            </div>
                        </span>
                        <span>
                            <div>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </div>)
                }
            </div>
        )
    }
}