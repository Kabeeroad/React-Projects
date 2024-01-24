import React, { useState } from "react";
import "./Board.css";
function Cell({ value, onClick }) {
  return (
    <button className="cell" onClick={onClick}>
      {value}
    </button>
  );
}

function Board() {
  const [cells, setCells] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const handleClick = (index) => {
    if (cells[index] !== "") return;
    const newCells = [...cells];
    newCells[index] = currentPlayer;
    setCells(newCells);

    // Check for winner
    if (checkForWinner(newCells, currentPlayer)) {
      console.log(`${currentPlayer} wins!`);
      // Handle winner scenario (display message, reset game, etc.)
    } else if (isBoardFull(newCells)) {
      console.log("It's a tie!");
      // Handle tie scenario (display message, reset game, etc.)
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  return (
    <div className="board">
      {cells.map((cell, index) => (
        <Cell key={index} value={cell} onClick={() => handleClick(index)} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div className="player-turn">Player {currentPlayer}'s Turn</div>
      <Board />
    </div>
  );
}

export default App;
