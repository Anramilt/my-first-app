import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Game from "./Game";
import "./../styles.css";
import FileManager from "./FileManager/FileManager";


const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const searchGame = async (input) => {
    if (input.trim().length === 0) {
      setResults([]);
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/search?q=${encodeURIComponent(input)}`);
      if (!response.ok) {
        console.error("Ошибка запроса:", response.status);
        return;
      }

      const data = await response.json();
      console.log("Результаты поиска:", data); // Лог для отладки
      setResults(data || []);
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  };
  // Загружаем результаты при открытии страницы с параметром из URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get("q");
    if (searchQuery) {
      setQuery(searchQuery);
      searchGame(searchQuery);
    }
  }, [location.search]);


  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    searchGame(value);
  };

  const handleResultClick = (game) => {
    setQuery(game.name); // сохраняется стркоа
    setResults([]);
  };

  // Обработчик поиска
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

            {/* Блок с результатами поиска */}
            {results.length > 0 && (
        <div className="search-results">
          {results.map((game, index) => (
            <div key={index} className="game-result">
              <h2>{game.name}</h2>
              {game.icon && (
                <img
                  src={`http://localhost:8080/images?name=${encodeURIComponent(game.icon)}`}
                  alt={game.name}
                  className="game-icon"
                />
              )}
              <div className="image-gallery">
                {game.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={`http://localhost:8080/images?name=${encodeURIComponent(image)}`}
                    alt={`Игра ${game.name}`}
                    className="game-image"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};


export default SearchPage;






{/* {results.length > 0 && (
          <div className="results-container">
            {results.map((game, index) => (
              <div key={index} className="result-item" onClick={() => handleResultClick(game)}>
                {game.name}
              </div>
            ))}
          </div>
        )}
        <button type="button" className="button" onClick={performSearch}>
          Поиск
        </button>
      </div>
      
      {/* <FileManager /> */}
{/* <Game /> *
    </div>
  );
}; */}
