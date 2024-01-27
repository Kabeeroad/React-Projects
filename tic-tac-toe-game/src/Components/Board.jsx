import React, { useState } from "react";
import "./Board.css";
const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [currentplayer, setCurrentPlayer] = useState("x");
  const click = (n) => {
    let sequare = [...board];
    if (board[n] !== "") {
      alert("already Clicked");
      return;
    }
    sequare[n] = currentplayer;
    setBoard(sequare);
    if (currentplayer === "x") {
      setCurrentPlayer("0");
    } else {
      setCurrentPlayer("x");
    }

    if (checkWinner(sequare)) {
      alert("Winner");
      sequare.fill("");
      setBoard(sequare);
    }
  };
  const checkDraw()
  function checkWinner(board) {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let flag = false;
    winningConditions.forEach((element) => {
      if (
        board[element[0]] !== "" &&
        board[element[1]] !== "" &&
        board[element[2]] !== ""
      ) {
        if (
          board[element[0]] === board[element[1]] &&
          board[element[1]] === board[element[2]]
        ) {
          flag = true;
        }
      }
    });
    return flag;
  }
  return (
    <>
      <h1>Hello</h1>
      <table>
        <tbody>
          <tr>
            <td onClick={(n) => click(0)}>{board[0]}</td>
            <td onClick={(n) => click(1)}>{board[1]}</td>
            <td onClick={(n) => click(2)}>{board[2]}</td>
          </tr>
          <tr>
            <td onClick={(n) => click(3)}>{board[3]}</td>
            <td onClick={(n) => click(4)}>{board[4]}</td>
            <td onClick={(n) => click(5)}>{board[5]}</td>
          </tr>
          <tr>
            <td onClick={(n) => click(6)}>{board[6]}</td>
            <td onClick={(n) => click(7)}>{board[7]}</td>
            <td onClick={(n) => click(8)}>{board[8]}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Board;
