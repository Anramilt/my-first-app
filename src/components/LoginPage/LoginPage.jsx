import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import classes from "./LoginPage.module.css";

import yandex from '../../Images/Regular_size/yandex.svg'
import google from '../../Images/Regular_size/google.svg'
import finalcleanlight from '../../Images/Regular_size/finalcleanlight.svg'

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.mainConteiner}>
      <div className={classes.mainTheme}>
        <img src={finalcleanlight}></img>
      </div>

      <div className={classes.loginContainer}>
        <div className={classes.title}>
          <div className={classes.mobiTestText}>MobiTEST </div>
          <div className={classes.systemEnterText}>Вход в систему </div>
          <div className={classes.registrationText}>
            <NavLink to="/register" className={navData => navData.isActive ? classes.activeLink : classes.item}>Зарегистрироваться</NavLink>
          </div>
          {/* <h2 className={classes.title}>Вход в систему</h2> */}
        </div>

        {/* <form action="http://localhost:8080/handle-login" method="POST"> */}
        <div className={classes.inputBox}>
          {/* <label htmlFor="login">Логин:</label><br /> */}
          <input type="text" placeholder="Логин/почта" className={classes.input} required /><br /><br />
        </div>

        <div className={classes.inputBox}>
          {/* <label htmlFor="password">Пароль:</label><br /> */}
          <input type="password" placeholder="Пароль" className={classes.input} required /><br /><br />
        </div>


        <div className={classes.buttonСontainer}>
          {/* <button type="button" className={classes.button} onClick={() => navigate(-1)}>Назад</button> */}
          <button type="submit" className={classes.button}>Войти</button>
        </div>
        {/* </form> */}
        <div className={classes.registrationButtonsWrapper}>
          <div className={classes.iconButton}>
            <div className={classes.yandexIcon}>
              <div className={classes.yandexImgIcon}>
                <img
                  src={yandex}
                  effect="blur"
                />
              </div>
            </div>
          </div>
          <div className={classes.iconButton}>
            <div className={classes.googleIcon}>
              <div className={classes.googleImgIcon}>
                <img
                  src={google}
                  effect="blur"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
