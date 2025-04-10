import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import classes from "./LoginPage.module.css";

import yandex from '../../Images/Regular_size/yandex.svg'
import google from '../../Images/Regular_size/google.svg'
import finalcleanlight from '../../Images/Regular_size/finalcleanlight.svg'


/*http://localhost:8080/handle-register*/


const LoginPage = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")


  const HandleLogin = async (e) => {
    try {
      const formData = new URLSearchParams();
      formData.append("login", login.trim());
      formData.append("password", password.trim());

      const response = await axios.post("http://localhost:8080/handle-login", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });

      console.log("Успешный вход:", response.data);
      navigate("/");
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  };

  return (
    <div>
      <div className={classes.mainTheme}>
        <img src={finalcleanlight}></img>
      </div>
      <div className={classes.mainContainer}>

        <div className={classes.loginContainer}>
          <div className={classes.title}>
            <div className={classes.mobiTestText}>MobiTEST </div>
            <div className={classes.systemEnterText}>Вход в систему </div>
            <div className={classes.registrationText}>
              <NavLink to="/register" className={navData => navData.isActive ? classes.activeLink : classes.item}>Зарегистрироваться</NavLink>
            </div>
          </div>

          {/* <form action="http://localhost:8080/handle-login" method="POST"> */}
          <div className={classes.inputBox}>
            <input 
              type="text" 
              placeholder="Логин/почта" 
              className={classes.input} required 
              value={login} 
              onChange={(e) => setLogin(e.target.value)} 
            />
          </div>

          <div className={classes.inputBox}>
            <input 
              type="password" 
              placeholder="Пароль" 
              className={classes.input} required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>


          <div className={classes.buttonСontainer}>
            <button type="submit" className={classes.button} onClick={HandleLogin}>Войти</button>
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
    </div>
  );
};

export default LoginPage;
