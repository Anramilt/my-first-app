import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./LoginPage.module.css";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.mainConteiner}>
      <div className={classes.loginContainer}>
        <h2 className={classes.title}>Вход в систему</h2>

        
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
        
      </div>
    </div>
  );
};

export default LoginPage;
