import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./LoginPage.module.css";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.loginContainer}>
      <h2>Авторизация</h2>
      <form action="http://localhost:8080/handle-login" method="POST">
        <label htmlFor="login">Логин:</label><br />
        <input type="text" id="login" name="login" required /><br /><br />

        <label htmlFor="password">Пароль:</label><br />
        <input type="password" id="password" name="password" required /><br /><br />

        <div className={classes.buttonСontainer}>
          <button type="button" className={classes.button} onClick={() => navigate(-1)}>Назад</button>
          <button type="submit" className={classes.button}>Авторизоваться</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
