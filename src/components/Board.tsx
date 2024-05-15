import React from "react";
import Tile from "./Tile";

interface BoardProps {
  tiles: (string | null)[];
}

const Board: React.FC<BoardProps> = ({ tiles }) => {
  return (
    <div className="board grid grid-cols-3 grid-rows-3 relative cursor-pointer">
      <Tile value={tiles[0]} row={0} col={0} />
      <Tile value={tiles[1]} row={0} col={1} />
      <Tile value={tiles[2]} row={0} col={2} />
      <Tile value={tiles[3]} row={1} col={0} />
      <Tile value={tiles[4]} row={1} col={1} />
      <Tile value={tiles[5]} row={1} col={2} />
      <Tile value={tiles[6]} row={2} col={0} />
      <Tile value={tiles[7]} row={2} col={1} />
      <Tile value={tiles[8]} row={2} col={2} />
    </div>
  );
};

export default Board;
