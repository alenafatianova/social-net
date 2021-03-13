import React from 'react'
import { UsersType } from '../../redux/users-reducer'
import { Paginator } from '../common/Paginator/Paginator'
import { User } from './User'


type UsersPropsType = {
    totalItemsCount: number 
    pageSize: number
    currentPage: number
    users: Array<UsersType>
    followingInProgress: number[]
    portionSize: number
    onPageChanged: (pageNumber: number) => void
    unfollowUser: (id: number) => void
    followUser: (id: number) => void
}


export const Users = React.memo((props: UsersPropsType) => {
    
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
   
    let pages = []
    for (let i = 1; i <= pagesCount; i ++ ) {
        pages.push(i);
    }

    return (
        <div>
        
            <Paginator 
                onPageChanged={props.onPageChanged} 
                currentPage={props.currentPage} 
                pageSize={props.pageSize} 
                totalItemsCount={props.totalItemsCount}
                portionSize={props.portionSize}/> 
                <div>
                {
                props.users.map(u => <User 
                        key={u.id}  
                        followingInProgress={props.followingInProgress} 
                        unfollowUser={props.unfollowUser}
                        followUser={props.followUser}
                        user={u}
                        />
                       
                    )
                }
                </div>
             </div>
    )
})
