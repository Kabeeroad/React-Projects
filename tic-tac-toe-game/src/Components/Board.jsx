import React, { useState } from "react";
import "./Board.css";
const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(""));

  return (
    <>
      <h1>Hello</h1>
      <table>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Board;
