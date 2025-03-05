import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <h2>Авторизация</h2>
      <form action="http://localhost:8080/handle-login" method="POST">
        <label htmlFor="login">Логин:</label><br />
        <input type="text" id="login" name="login" required /><br /><br />

        <label htmlFor="password">Пароль:</label><br />
        <input type="password" id="password" name="password" required /><br /><br />

        <div className="button-container">
          <button type="button" className="button" onClick={() => navigate(-1)}>Назад</button>
          <button type="submit" className="button">Авторизоваться</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
