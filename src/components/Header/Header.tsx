import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.scss' 


export type mapStateToPropsType = {
    login: string | null
    isAuth: boolean
}
  
export type mapDispatchToPropsType = {
    setAuthData: (id: number, email: string, login: string, isAuth: boolean) => void
}


export const Header: React.FC<mapStateToPropsType & mapDispatchToPropsType> = (props) => {
    return (
        <div className={classes.header}>
           <div className={classes.links}>
           <div className={classes.login}>
               {
               props.isAuth ? props.login : 
                <NavLink to={'/login'} activeClassName={classes.active}>Login</NavLink>}
            </div>
            <div className={classes.registrate}>
            <NavLink to={'/registration'} activeClassName={classes.active}>Registrate</NavLink>
            </div>
           </div>
        </div>
    )
}
