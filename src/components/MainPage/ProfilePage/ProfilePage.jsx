import React from 'react';
import { useNavigate } from "react-router-dom";

import LoginPage from '../../LoginPage/LoginPage';
import RegisterPage from '../../RegisterPage/RegisterPage';
import Settings from './Settings/Settings'
import classes from './ProfilePage.module.css'

const ProfilePage = () => {
  const navigate = useNavigate();



  return (
    <div className={classes.mainConteiner}>
      <div className={classes.avatar}>
        <h1>Avatar</h1>
      </div>
      <div className={classes.info}>
        <div className={classes.infoitem}>
          Name
        </div>
        <div className={classes.infoitem}>
          Surname
        </div>
        <div className={classes.infoitem}>
          Account Type
        </div>
      </div>



      {/* <div className="auth-buttons">
        <button onClick={() => navigate("/register")}>Регистрация</button>
        <button onClick={() => navigate("/login")}>Авторизация</button>
      </div> */}
      {/* <div><LoginPage/></div>
        <div><RegisterPage /></div>
        <div><Settings /></div> */}
    </div>

  );
}

export default ProfilePage;



