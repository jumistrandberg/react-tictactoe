import React from "react";

interface TileProps {
  value: string | null;
  row: number;
  col: number;
  onClick?: () => void;
}
const Tile: React.FC<TileProps> = ({ row, col, value, onClick }) => {
  const isLeftEdge = col === 0;
  const isTopEdge = row === 0;
  const borderStyling = `${isLeftEdge ? "border-l-2" : ""} ${
    isTopEdge ? "border-t-2" : ""
  }`;

  return (
    <div
      onClick={onClick}
      className={`tile min-w-[100px] min-h-[100px] text-3xl border-b-2 border-r-2 ${borderStyling} justify-center items-center flex `}
    >
      {value}
    </div>
  );
};

export default Tile;
