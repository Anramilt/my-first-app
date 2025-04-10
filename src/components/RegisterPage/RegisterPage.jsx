import React, {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import classes from "./RegisterPage.module.css";
import axios from "axios";

import yandex from '../../Images/Regular_size/yandex.svg'
import google from '../../Images/Regular_size/google.svg'
import finalcleanlight from '../../Images/Regular_size/finalcleanlight.svg'


const RegisterPage = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [key, setKey] = useState("")

  const HandleRegister = async (e) => {
    try {
      const formData = new URLSearchParams();
      formData.append("login", login.trim());
      formData.append("password", password.trim());
      formData.append("key", key.trim());

      const response = await axios.post("http://localhost:8080/handle-register", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });

      console.log("Успешная регистрация аккаунта:", response.data);
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

        <div className={classes.registerContainer}>
          <div className={classes.title}>
            <div className={classes.mobiTestText}>MobiTEST </div>
            <div className={classes.systemEnterText}>Регистрация</div>
            <div className={classes.registrationText}>
              <NavLink to="/" className={navData => navData.isActive ? classes.activeLink : classes.item}>Войти в аккаунт</NavLink>
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

          <div className={classes.inputBox}>
            <input 
              type="key" 
              placeholder="Ключ доступа" 
              className={classes.input} required 
              value={key} 
              onChange={(e) => setKey(e.target.value)}
            />
          </div>


          <div className={classes.buttonСontainer}>
            <button type="submit" className={classes.button} onClick={HandleRegister}>Зарегистрироваться</button>
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