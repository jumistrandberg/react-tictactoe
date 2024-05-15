import React, { useState } from "react";
import Board from "./Board";

const playerX = "X"
const playerO = "O"

const Game: React.FC = () => {
  const [tiles, setTiles] = useState(Array(9).fill(null)); 
  const [playerTurn, setPlayerTurn] = useState(playerX);

  const handleTileClick = (index) => {
    if(tiles[index] !== null) {
      return;
    }
    const newTiles = [...tiles]; 
    newTiles[index] = playerTurn;
    setTiles(newTiles);
    if(playerTurn === playerX) {
      setPlayerTurn(playerO);
    } else {
      setPlayerTurn(playerX);
    }
  }

  return (
    <div className="h-[100vh] w-full border-2 flex flex-col items-center">
      <h1 className="border-2 w-full text-center p-3 mb-5 text-5xl">Tic-Tac-Toe</h1>
      <Board tiles={tiles} onTileClick={handleTileClick}/>
    </div>
  );
};

export default Game;
