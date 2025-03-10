import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import SearchBar from "./SearchBar";
//import TicTacToe from "./Game";
import LoginPage from "./LoginPage"; 
import RegisterPage from "./RegisterPage"; 
import SearchPage from "./SearchPage";

import PropTypes from "prop-types";
import ArticleList from "./components/ArticleList";
import {articles} from './fixtures' 



class App extends Component{
  static propTypes ={

  };

  render(){
    return(
      <div>
        <ArticleList articles={this.props.articles} />
      </div>
    )
  }
}

export default App;
/*
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

export default App;*/