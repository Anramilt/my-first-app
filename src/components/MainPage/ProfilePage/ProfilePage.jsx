import React from 'react';
import { useNavigate } from "react-router-dom";

import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';
import Settings from './Settings/Settings'


const ProfilePage = () => {
  const navigate = useNavigate();



  return (
    <div>
      <div className="auth-buttons">
        <button onClick={() => navigate("/register")}>Регистрация</button>
        <button onClick={() => navigate("/login")}>Авторизация</button>
      </div>
      {/* <div><LoginPage/></div>
        <div><RegisterPage /></div>
        <div><Settings /></div> */}
    </div>

  );
}

export default ProfilePage;



