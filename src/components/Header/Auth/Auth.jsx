import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Auth.module.css';


const Auth = (props) => {
    if (props.userData.isAuth) {
        return (
            <div className={css.currentUser} >
                <span>{props.userData.login}</span>
            </div >
        )
    } else {
        return (
            <div className={css.loginBlock} >
                <NavLink to='/login'>Вход</NavLink>
            </div >
        )
    }
}


export default Auth;
