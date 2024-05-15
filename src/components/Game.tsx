import React, { useState, useEffect } from "react";
import Board from "./Board";
import GameOver from "./GameOver";
import GameState from "./GameState";
import Reset from "./Reset";
import "../lineStyles.css";

const playerX = "X";
const playerO = "O";

const winningCombos = [
  //Rows
  { combo: [0, 1, 2], lineClass: "line-row-1" },
  { combo: [3, 4, 5], lineClass: "line-row-2" },
  { combo: [6, 7, 8], lineClass: "line-row-3" },

  //Columns
  { combo: [0, 3, 6], lineClass: "line-column-1" },
  { combo: [1, 4, 7], lineClass: "line-column-2" },
  { combo: [2, 5, 8], lineClass: "line-column-3" },

  //Diagonals
  { combo: [0, 4, 8], lineClass: "line-diagonal-1" },
  { combo: [2, 4, 6], lineClass: "line-diagonal-2" },
];

const checkWinner = (tiles, setLineClass, setGameState) => {
  for (const { combo, lineClass } of winningCombos) {
    const tileValue1 = tiles[combo[0]];
    const tileValue2 = tiles[combo[1]];
    const tileValue3 = tiles[combo[2]];

    if (
      tileValue1 !== null &&
      tileValue1 === tileValue2 &&
      tileValue1 === tileValue3
    ) {
      setLineClass(lineClass);
      if (tileValue1 === playerX) {
        setGameState(GameState.playerXWins);
      } else {
        setGameState(GameState.playerOWins);
      }
      return;
    }
  }

  const allTilesFilled = tiles.every((tile) => tile !== null);
  if (allTilesFilled) {
    setGameState(GameState.draw);
  }
};

const Game: React.FC = () => {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(playerX);
  const [lineClass, setLineClass] = useState();
  const [gameState, setGameState] = useState(GameState.inProgress);

  useEffect(() => {
    checkWinner(tiles, setLineClass, setGameState);
  }, [tiles]);

  const handleReset = () => {
    setGameState(GameState.inProgress);
    setTiles(Array(9).fill(null));
    setPlayerTurn(playerX); 
  };

  const handleTileClick = (index) => {
    if (gameState !== GameState.inProgress) {
      return;
    }

    if (tiles[index] !== null) {
      return;
    }
    const newTiles = [...tiles];
    newTiles[index] = playerTurn;
    setTiles(newTiles);
    if (playerTurn === playerX) {
      setPlayerTurn(playerO);
    } else {
      setPlayerTurn(playerX);
    }
  };

  return (
    <div className="h-[100vh] w-full flex flex-col items-center">
      <h1 className="w-full text-center p-3 mb-5 text-5xl text-textColor uppercase tracking-wider">
        Tic-Tac-Toe
      </h1>
      <Board
        tiles={tiles}
        onTileClick={handleTileClick}
        lineClass={lineClass}
      />
      <GameOver gameState={gameState} />
      <Reset gameState={gameState} onReset={handleReset} />
    </div>
  );
};

export default Game;
