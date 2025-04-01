import React from 'react';
import classes from'./Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <h1>Сайт</h1>
            <div className={classes.authButtons}>
                <button className={classes.authButton}>Войти</button>
                <button className={classes.authButton}>Регистрация</button>
            </div>
        </header>
    );
};

export default Header;