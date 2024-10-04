import React from "react";
import TurnManager from "./turn manager/TurnManager.tsx";
import PlayersList from "./players-list/PlayersList.tsx";

export type SidePanelProps = ChildProps & { game: Game}
function SidePanel({className, game}: SidePanelProps): React.JSX.Element {
    return (<div className={className}>
        <PlayersList players={game.players}></PlayersList>
        <TurnManager></TurnManager>
    </div>)
}

export default SidePanel;
