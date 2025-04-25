import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import classes from "./SearchBar.module.css"

//import Game from "./MainPage/MainPage/Game";
//import "./../styles.css";
//import FileManager from "../../FileManager/FileManager";


const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();


  const searchGame = async (input) => {
    if (input.trim().length === 0) {
      setResults([]);
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/searchlimit?q=${encodeURIComponent(input)}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        console.error("Ошибка запроса:", response.status);
        return;
      }

      const data = await response.json();
      console.log("Результаты поиска:", data);
      setResults(data || []);
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  };

  const performSearch = async () => {
    if (!query || query.trim().length === 0) {
      console.error("Ошибка: query пустой или undefined");
      return;
    }

    navigate(`/lessons?q=${encodeURIComponent(query)}`);
    

    try {
      const response = await fetch(`http://localhost:8080/search?q=${encodeURIComponent(query)}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        console.error("Ошибка запроса:", response.status);
        return;
      }

      const data = await response.json();
      console.log("Результаты поиска:", data);

      if (!Array.isArray(data)) {
        console.error("Ошибка: данные не массив!", data);
        return;
      }

      setResults(data || []);
      setShowResults(true); // Включаем отображение результатов поиска
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  };

  const handleResultClick = (game) => {
    setQuery(typeof game === "string" ? game : game.name);
    setResults([]);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setShowResults(false);
    setQuery(value);
    searchGame(value);
  };



  return (
    <div className={classes.container}>
      <h1>Поиск игры</h1>


      <div className={classes.searchContainer}> {/*Поисковая строка*/}
        <input
          type="text"
          id="searchInput"
          value={query || ""}
          onChange={handleInputChange}
          placeholder="Поиск упражнения..."
        />
        <button type="button" className="button" onClick={performSearch}>Поиск</button>


        {results.length > 0 && !showResults && (
          <div className={classes.resultsContainer}>
            {results.map((game, index) => (
              <div 
                key={index} 
                className={classes.resultItem} 
                onClick={() => handleResultClick(game)}
              >
                {typeof game === "string" ? game : game.name}
              </div>
            ))}
          </div>

        )}
      </div>

      {/* Блок с результатами поиска */}
      {showResults && results.length > 0 && (
        <div className={classes.searchResults}>
          {results.map((game, index) => (
            <div key={index} className={classes.gameResult}>
              <h2>{game.name}</h2>
              {game.icon && (
                <img
                  src={`http://localhost:8080/images?name=${encodeURIComponent(game.icon)}`}
                  alt={game.name}
                  className={classes.gameIcon}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default SearchBar;






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







  // Загружаем результаты при открытии страницы с параметром из URL
  /*useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get("q");
    if (searchQuery) {
      setQuery(searchQuery);
      searchGame(searchQuery);
      //setShowResults(false);
    }
  }, [location.search]);*/


  /*const handleInputChange = (e) => {
    setQuery(e.target.value);
    //searchGame(value);
  };*/



  // Обработчик поиска
  /*const performSearch = () => {
    /*if (query.length > 0) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      searchGame(query);
    }*
    if (query.trim().length > 0) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      searchGame(query);
    }
  };*/




  /*const searchGame = async (input) => {

    if (input.trim().length === 0) {
      setResults([]);
      return;
    }
    setShowResults(true); // Показываем результаты после поиска
    // if (input.trim().length === 0) {
    //   setResults([]);
    //   return;
    // }
    try {
      const response = await fetch(`http://localhost:8080/search?q=${encodeURIComponent(input)}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }, // Явно указываю JSON
      });

      if (!response.ok) {
        console.error("Ошибка запроса:", response.status);
        return;
      }

      const data = await response.json();
      console.log("Результаты поиска:", data); // Лог для отладки
      setResults(data || []);
      //setShowResults(true);
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  };*/