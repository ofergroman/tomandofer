import './App.css'
import * as React from "react";
import GameBoard from "./game-board/GameBoard.tsx";


function App(): React.JSX.Element {
  return <div>
      <GameBoard className="flex"></GameBoard>
  </div>

}

export default App
