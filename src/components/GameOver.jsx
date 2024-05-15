import GameState from "./GameState";

function GameOver({ gameState }) {
  switch (gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.playerOWins:
      return <div className="border-contrastColor border-2 rounded-md p-2 w-40 text-center text-textColor m-10 tracking-wider  uppercase">O Wins</div>;
    case GameState.playerXWins:
      return <div className="border-contrastColor border-2 rounded-md p-2 w-40 text-center text-textColor m-10 tracking-wider uppercase">X Wins</div>;
    case GameState.draw:
      return <div className="border-contrastColor border-2 rounded-md p-2 w-40 text-center text-textColor m-10 spa tracking-wider uppercase">Draw</div>;
    default:
      return <></>;
  }
}

export default GameOver;