import './App.css'
import * as React from "react";
import GameBoard from "./game-board/GameBoard.tsx";


function App(): React.JSX.Element {
  return <GameBoard className="flex w-full h-full"></GameBoard>;


}

export default App
