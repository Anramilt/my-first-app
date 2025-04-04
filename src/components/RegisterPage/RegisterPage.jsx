import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./RegisterPage.module.css";

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.registerContainer}>
      <h2>Регистрация</h2>
      <form action="http://localhost:8080/handle-register" method="POST">
        <label htmlFor="login">Логин:</label><br />
        <input type="text" id="login" name="login" required /><br /><br />

        <label htmlFor="password">Пароль:</label><br />
        <input type="password" id="password" name="password" required /><br /><br />

        <label htmlFor="key">Ключ:</label><br />
        <input type="text" id="key" name="key" required /><br /><br />

        <div className={classes.buttonСontainer}>
          <button type="button" className={classes.button} onClick={() => navigate(-1)}>Назад</button>
          <button type="submit" className={classes.button}>Регистрация</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;