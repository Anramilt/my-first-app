import React, { useState, useEffect } from "react";

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [message, setMessage] = useState("");

  // Запрос к серверу для получения сообщения
  useEffect(() => {
    fetch("http://localhost:8080")
      .then((res) => res.json())
      .then((data) => setMessage(data.text))
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
      <h2>Сообщение от сервера: {message}</h2>
      <div className="status">{xIsNext ? "Ходит X" : "Ходит O"}</div>
      <div className="board-row">{[0, 1, 2].map(renderSquare)}</div>
      <div className="board-row">{[3, 4, 5].map(renderSquare)}</div>
      <div className="board-row">{[6, 7, 8].map(renderSquare)}</div>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default Game;
