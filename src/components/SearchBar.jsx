import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const searchGame = async (e) => {
    const input = e.target.value.trim();
    setQuery(input);
  
    if (input.length < 1) {
      setResults([]);
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:8080/searchlimit?q=${encodeURIComponent(input)}`);
      if (!response.ok) {
        throw new Error(`Ошибка запроса: ${response.status}`);
      }
  
      const data = await response.json();
      setResults(data || []);
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  };

  // Функция выбора элемента из списка
  const selectGame = (game) => {
    setQuery(game.name); // ✅ Передаем только название, а не объект
    setResults([]);
  };

  // Функция для редиректа при нажатии на "Поиск"
  const performSearch = () => {
    if (query.length > 0) {
      navigate(`/search?q=${encodeURIComponent(query)}`); // ✅ Используем navigate, а не window.location.href
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={searchGame}
        placeholder="Введите название игры"
      />
      <div className="results-container">
        {results.map((game, index) => (
          <div key={index} className="result-item" onClick={() => selectGame(game)}>
            {game.name}
          </div>
        ))}
      </div>
      <button className="button" onClick={performSearch}>
        Поиск
      </button>
    </div>
  );
};

export default SearchBar;
