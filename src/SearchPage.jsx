import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Game from "./Game"; 
import "./styles.css";


const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const searchGame = async (input) => {
    if (input.trim().length === 0) {
      setResults([]);
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/searchlimit?q=${encodeURIComponent(input)}`);
      if (!response.ok) {
        console.error("Ошибка запроса:", response.status);
        return;
      }

      const categories = await response.json();
      setResults(categories || []);
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    searchGame(value);
  };

  const handleResultClick = (tag) => {
    setQuery(tag);
    setResults([]);
  };

  const performSearch = () => {
    if (query.trim().length > 0) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="container">
      <h1>Поиск игры</h1>
      <div className="auth-buttons">
      <button onClick={() => navigate("/register")}>Регистрация</button>
      <button onClick={() => navigate("/login")}>Авторизация</button>
      </div>

      <div className="search-container">
        <input
          type="text"
          id="searchInput"
          value={query}
          onChange={handleInputChange}
          placeholder="Введите название игры"
        />
        {results.length > 0 && (
          <div className="results-container">
            {results.map((tag, index) => (
              <div key={index} className="result-item" onClick={() => handleResultClick(tag)}>
                {tag}
              </div>
            ))}
          </div>
        )}
        <button type="button" className="button" onClick={performSearch}>
          Поиск
        </button>
      </div>
      <Game />
    </div>
  );
};

export default SearchPage;
