import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import classes from "./RegisterPage.module.css";

import yandex from '../../Images/Regular_size/yandex.svg'
import google from '../../Images/Regular_size/google.svg'
import finalcleanlight from '../../Images/Regular_size/finalcleanlight.svg'


const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.mainConteiner}>
      <img src={finalcleanlight}></img>
      <form action="http://localhost:8080/handle-register" method="POST">
        <div className={classes.registerContainer}>
          <div className={classes.title}>
            <div className={classes.mobiTestText}>MobiTEST </div>
            <div className={classes.systemEnterText}>Регистрация</div>
            <div className={classes.registrationText}>
              <NavLink to="/" className={navData => navData.isActive ? classes.activeLink : classes.item}>Войти в аккаунт</NavLink>
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

          <div className={classes.inputBox}>
            {/* <label htmlFor="password">Пароль:</label><br /> */}
            <input type="key" placeholder="Ключ доступа" className={classes.input} required /><br /><br />
          </div>


          <div className={classes.buttonСontainer}>
            {/* <button type="button" className={classes.button} onClick={() => navigate(-1)}>Назад</button> */}
            <button type="submit" className={classes.button}>Войти</button>
          </div>
          {/* </form> */}
          <div className={classes.registrationButtonsWrapper}>
            <div className={classes.iconButton}>
              <div className={classes.yandexIcon}>
                <img
                  src={yandex}
                  effect="blur"
                />
              </div>
            </div>
            <div className={classes.iconButton}>
              <div className={classes.googleIcon}>
                <img
                  src={google}
                  effect="blur"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>

  );
};

export default RegisterPage;




// return (
//   <div className={classes.registerContainer}>
//     <h2>Регистрация</h2>
//     <form action="http://localhost:8080/handle-register" method="POST">
//       <label htmlFor="login">Логин:</label><br />
//       <input type="text" id="login" name="login" required /><br /><br />

//       <label htmlFor="password">Пароль:</label><br />
//       <input type="password" id="password" name="password" required /><br /><br />

//       <label htmlFor="key">Ключ:</label><br />
//       <input type="text" id="key" name="key" required /><br /><br />

//       <div className={classes.buttonСontainer}>
//         <button type="button" className={classes.button} onClick={() => navigate(-1)}>Назад</button>
//         <button type="submit" className={classes.button}>Регистрация</button>
//       </div>
//     </form>
//   </div>
// );