import React, { useState } from "react";


const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchGame = async (e) => {
    const input = e.target.value.trim();
    setQuery(input);

    if (input.length < 1) {
      setResults([]); // Очищаем, если пустой ввод
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/searchlimit?q=${encodeURIComponent(input)}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }, // Явно указываю JSON
      });

      if (!response.ok) {
        throw new Error(`Ошибка запроса: ${response.status}`);
      }

      const categories = await response.json();
      setResults(categories || []); // Убеждаемся, что `setResults([])`, если `categories === null`
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  };

  // Функция выбора элемента из списка
  const selectGame = (game) => {
    setQuery(game);
    setResults([]);
  };

  // Функция для редиректа при нажатии на "Поиск"
  const performSearch = () => {
    if (query.length > 0) {
      window.location.href = `/search?q=${encodeURIComponent(query)}`;
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
      {results.length > 0 && (
        <div className="results-container">
          {results.map((tag, index) => (
            <div key={index} className="result-item" onClick={() => selectGame(tag)}>
              {tag}
            </div>
          ))}
        </div>
      )}
      <button className="search-button" onClick={performSearch}>
        Поиск
      </button>
      {/* <div id="results" className={results.length > 0 ? "show" : ""}>
        {results.map((tag, index) => (
          <div key={index} className="result-item" onClick={() => selectGame(tag)}>
            {tag}
          </div>
        ))}
      </div>
      <button className="button" onClick={performSearch}>
        Поиск
      </button> */}
    </div>
  );
};

export default SearchBar;
/*
    <div className="results">
        {results.map((tag, index) => (
          <div key={index} className="result-item" onClick={() => selectGame(tag)}>
            {tag}
          </div>
        ))}
      </div>
*/ 





