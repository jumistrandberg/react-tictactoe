import React from "react";
import GameState from "./GameState";

const Reset = ({ gameState, onReset }) => {
    if(gameState === GameState.inProgress) {
        return;
    }
  return (
    <button onClick={onReset} className="border-contrastColor border-2 rounded-md p-2 w-40 text-center text-textColor tracking-wider uppercase hover:text-mainBgColor hover:bg-contrastColor">
      Reset
    </button>
  );
};

export default Reset;
