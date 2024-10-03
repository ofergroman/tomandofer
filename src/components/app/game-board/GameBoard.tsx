import * as React from "react";
import SidePanel from "./side-panel/SidePanel.tsx";
import StoryBoard from "./story-board/StoryBoard.tsx";

function GameBoard({ className }: ChildProps): React.JSX.Element{
    return (<div className= {className}>
            <SidePanel className={'ml-5'}></SidePanel>
            <StoryBoard></StoryBoard>
    </div>)
}

export default GameBoard;