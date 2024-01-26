import React, { useState } from "react";
import "./Board.css";
const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const handelclick = () => {
    console.log("cliked");
  };
  return (
    <>
      <h1>Hello</h1>
      <table>
        <tbody>
          <tr>
            <td color="handelclick">{board[0]}</td>
            <td>{board[1]}</td>
            <td>{board[2]}</td>
          </tr>
          <tr>
            <td>{board[3]}</td>
            <td>{board[4]}</td>
            <td>{board[5]}</td>
          </tr>
          <tr>
            <td>{board[6]}</td>
            <td>{board[7]}</td>
            <td>{board[8]}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Board;
