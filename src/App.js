import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import SearchBar from "./SearchBar";
//import TicTacToe from "./Game";
import LoginPage from "./LoginPage"; 
import RegisterPage from "./RegisterPage"; 
import SearchPage from "./SearchPage";


function App() {
  return (
    <Router>
      <div className="container">
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;