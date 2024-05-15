import React from "react";

interface TileProps {
  row: number;
  col: number;
}
const Tile: React.FC<TileProps> = ({row, col}) => {
  const isLeftEdge = col === 0;
  const isTopEdge = row === 0;
  const borderStyling = `${isLeftEdge ? "border-l-2" : ""} ${isTopEdge ? "border-t-2" : ""}`

  return <div className={`tile w-100 h-100 text-3xl border-b-2 border-r-2 ${borderStyling} justify-center items-center flex `}>Tile</div>;
};

export default Tile;
