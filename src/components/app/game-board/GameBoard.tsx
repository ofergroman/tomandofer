import * as React from "react";
import SidePanel from "./side-panel/SidePanel.tsx";
import StoryBoard from "./story-board/StoryBoard.tsx";
import {GameState} from "../consts.ts";

function GameBoard({ className }: ChildProps): React.JSX.Element{
    const game: Game = {
        content: "Ho Ken",
        players: [],
        state: GameState.InGame,
        timePerTurn: 0,
        totalGameTime: 0
    };
    return (<div className= {className}>
            <SidePanel className="flex flex-3" game={game}></SidePanel>
            <StoryBoard className="flex flex-1 max-2xl" game={game}></StoryBoard>
    </div>)
}

export default GameBoard;