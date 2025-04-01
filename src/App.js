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


function App() {
  return (
    <BrowserRouter>

      <div className="app-container">

        <Header />
        <div className="main-layout">
          <Navbar />
          <div className="content">
            <Routes>

              <Route path="/" element={<MainPage />} />


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