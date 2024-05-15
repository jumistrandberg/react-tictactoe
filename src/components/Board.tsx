import React from "react";
import Tile from "./Tile";

interface BoardProps {
  tiles: (string | null)[];
  onTileClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ tiles, onTileClick }) => {
  return (
    <div className="board grid grid-cols-3 grid-rows-3 relative cursor-pointer">
      <Tile
        onClick={() => onTileClick(0)}
        value={tiles[0]}
        row={0}
        col={0}
      />
      <Tile
        onClick={() => onTileClick(1)}
        value={tiles[1]}
        row={0}
        col={1}
      />
      <Tile
        onClick={() => onTileClick(2)}
        value={tiles[2]}
        row={0}
        col={2}
      />
      <Tile
        onClick={() => onTileClick(3)}
        value={tiles[3]}
        row={1}
        col={0}
      />
      <Tile
        onClick={() => onTileClick(4)}
        value={tiles[4]}
        row={1}
        col={1}
      />
      <Tile
        onClick={() => onTileClick(5)}
        value={tiles[5]}
        row={1}
        col={2}
      />
      <Tile
        onClick={() => onTileClick(6)}
        value={tiles[6]}
        row={2}
        col={0}
      />
      <Tile
        onClick={() => onTileClick(7)}
        value={tiles[7]}
        row={2}
        col={1}
      />
      <Tile
        onClick={() => onTileClick(8)}
        value={tiles[8]}
        row={2}
        col={2}
      />
    </div>
  );
};

export default Board;
