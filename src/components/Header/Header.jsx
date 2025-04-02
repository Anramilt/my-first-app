import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';

const Header = () => {
    let path = "/profile";
    return (
        <div className={classes.header}>
            <h1>Header</h1>
            <div className={classes.headerNavbar}>
                <button className={classes.bar} >
                    <NavLink to="/about" className={navData => navData.isActive ? classes.activeLink : classes.item}> О нас</NavLink>
                </button>
                <button className={classes.bar}>
                    <NavLink to="/news" className={navData => navData.isActive ? classes.activeLink : classes.item}> Новости</NavLink>
                </button>
                <button className={classes.bar}>
                    <NavLink to="/contact" className={navData => navData.isActive ? classes.activeLink : classes.item}> Контакты</NavLink>
                </button>
            </div>

            <div className={classes.authContainer}>
                <div className={classes.profile}>
                    <NavLink to={path} className={navData => navData.isActive ? classes.activeLink : classes.item}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9tF6ij5EJiyjbCUv8ph6CKhTuZmsXmc1zEi4d1NKOBKWbTwpMtOk8yR1YmC8af417PeA&usqp=CAU' alt='profile' />
                    </NavLink>
                </div>
                <div className={classes.authButtons}>
                    <button className={classes.authButton} >
                        <NavLink to="/auth" className={navData => navData.isActive ? classes.activeLink : classes.item}> Войти</NavLink>
                    </button>
                    <button className={classes.authButton}>
                        <NavLink to="/register" className={navData => navData.isActive ? classes.activeLink : classes.item}> Регистрация</NavLink>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;