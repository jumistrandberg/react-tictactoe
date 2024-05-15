import React from "react";

interface TileProps {
  value: string | null;
  row: number;
  col: number;
}
const Tile: React.FC<TileProps> = ({row, col, value}) => {
  const isLeftEdge = col === 0;
  const isTopEdge = row === 0;
  const borderStyling = `${isLeftEdge ? "border-l-2" : ""} ${isTopEdge ? "border-t-2" : ""}`

  return <div className={`tile min-w-[100px] min-h-[100px] text-3xl border-b-2 border-r-2 ${borderStyling} justify-center items-center flex `}>
    {value}
  </div>;
};

export default Tile;
