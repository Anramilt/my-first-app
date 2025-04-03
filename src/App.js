import React, { Component } from "react";
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Routes, Route, BrowserRouter } from "react-router"
import './App.css';
//import SearchBar from "./SearchBar";
//import TicTacToe from "./Game";
//import LoginPage from "./components/LoginPage/LoginPage";
//import RegisterPage from "./components/RegisterPage/RegisterPage";
//import SearchPage from "./components/SearchPage";
import MainPage from "./components/MainPage/MainPage"

import Navbar from './components/Navbar/Navbar';
import Header from "./components/Header/Header";
import LoginPage from "./components/Header/LoginPage/LoginPage";
import RegisterPage from "./components/Header/RegisterPage/RegisterPage";
import AboutCompany from "./components/MainPage/Content/AboutCompany/AboutCompany";
import News from "./components/MainPage/Content/News/News";
import Contacts from "./components/MainPage/Content/Contacts/Contacts";
import ProfilePage from "./components/MainPage/ProfilePage/ProfilePage";
import LessonPage from "./components/LessonsPage/LessonPage";
import SearchBar from "./components/LessonsPage/SearchBar/SearchBar";
import Support from "./components/MainPage/Support/Support";


function App() {
  return (
    <BrowserRouter>

      <div className="app-container">

        <Header />
        <div className="main-layout">
          <Navbar />
          <div className="content">
            <Routes>
              {/*Чисто кнопки в Header*/}
              <Route path="/" element={<MainPage />} />
              <Route path="/auth" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/about" element={<AboutCompany />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contacts />} />

              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />


              <Route path="/profile" element={<ProfilePage />} />


              <Route path="/lessons" element={<LessonPage />} />
              <Route path="/search" element={<SearchBar />} />

              <Route path="/help" element={<Support />} />


              {/* <Route path="/search" element={<SearchPage />} />
        <Route path="/" element={<SearchPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> */}
            </Routes>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;