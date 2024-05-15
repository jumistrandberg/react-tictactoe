import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [board, setBoard] = useState<any>(
    // make array with 3 rows 3 columns with empty cells
    Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => null))
  );

  return (
    <div className="game">
      <h1>Tic-Tac-Toe</h1>
      <Board board={[]} handleClick={() => ""} />
    </div>
  );
};

export default Game;
