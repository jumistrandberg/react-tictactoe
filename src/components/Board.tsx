import React from "react";
import Tile from "./Tile";

const Board = () => {
  return (
    <div className="board grid grid-cols-3 grid-rows-3 relative cursor-pointer">
      <Tile row={0} col={0} />
      <Tile row={0} col={1} />
      <Tile row={0} col={2} />
      <Tile row={1} col={0} />
      <Tile row={1} col={1} />
      <Tile row={1} col={2} />
      <Tile row={2} col={0} />
      <Tile row={2} col={1} />
      <Tile row={2} col={2} />
    </div>
  );
};

export default Board;
