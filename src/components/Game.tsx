import React, { useState } from "react";
import Board from "./Board";

const Game = () => {

  return (
    <div className="h-[100vh] w-full border-2 flex flex-col items-center">
      <h1 className="border-2 w-full text-center p-3 mb-5 text-5xl">Tic-Tac-Toe</h1>
      <Board />
    </div>
  );
};

export default Game;
