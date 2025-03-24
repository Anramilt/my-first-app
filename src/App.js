import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import SearchBar from "./SearchBar";
//import TicTacToe from "./Game";
import LoginPage from "./components/LoginPage/LoginPage"; 
import RegisterPage from "./components/RegisterPage/RegisterPage"; 
import SearchPage from "./components/SearchPage";


function App() {
  return (
    <Router>
      <div className="container">
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/" element={<SearchPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;