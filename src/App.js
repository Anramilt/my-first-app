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

/*{}
<SearchBar />*/ 

/*<div className="container">
        <h1>Поиск игры</h1>
        <div className="auth-buttons">
          <Link to="/register">
            <button>Регистрация</button>
          </Link>
          <Link to="/login">
            <button>Авторизация</button>
          </Link>
        </div>
        
        

        {}
        <TicTacToe />
      </div>*/ 




/*import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SearchPage from "./SearchPage";
import "./styles.css";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [message, setMessage] = useState(""); // Данные от сервера

  // Делаем запрос к Go-серверу
  useEffect(() => {
    fetch("http://localhost:8080/api/message") // Убедись, что Go-сервер отдает API на этом пути
      .then((res) => {
        console.log("GOT RESPONSE")
        res.json()
      })
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Ошибка запроса:", err));
  }, []);

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) return;
    const squaresCopy = [...squares];
    squaresCopy[i] = xIsNext ? "X" : "O";
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => (
    <button className="square" onClick={() => handleClick(i)}>
      {squares[i]}
    </button>
  );

  return (
    <div className="game-field">
      <h2>Сообщение от сервера: {message}</h2> {}
      <div className="status">{xIsNext ? "Ходит X" : "Ходит O"}</div>
      <div className="board-row">{[0, 1, 2].map(renderSquare)}</div>
      <div className="board-row">{[3, 4, 5].map(renderSquare)}</div>
      <div className="board-row">{[6, 7, 8].map(renderSquare)}</div>
    </div>
  );
}

// Функция для проверки победителяimport React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  // Функция для запроса к серверу
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
      setResults(categories);
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  };

  // Обработчик ввода в поисковой строке
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    searchGame(value);
  };

  // Обработчик клика по результату
  const handleResultClick = (tag) => {
    setQuery(tag);
    setResults([]);
  };

  // Функция перехода на страницу поиска
  const performSearch = () => {
    if (query.trim().length > 0) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="container">
      <h1>Поиск игры</h1>
      <div className="auth-buttons">
        <a href="/register">
          <button>Регистрация</button>
        </a>
        <a href="/login">
          <button>Авторизация</button>
        </a>
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
          <div id="results" className="results-container">
            {results.map((tag, index) => (
              <div
                key={index}
                className="result-item"
                onClick={() => handleResultClick(tag)}
              >
                {tag}
              </div>
            ))}
          </div>
        )}
        <button type="button" className="button" onClick={performSearch}>
          Поиск
        </button>
      </div>
    </div>
  );
};

export default SearchPage;

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default App;
*/
