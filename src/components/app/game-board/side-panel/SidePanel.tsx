import React from 'react';
import TurnManager from './turn manager/TurnManager.tsx';
import PlayersList from './players-list/PlayersList.tsx';

export type SidePanelProps = ChildProps & { game: Game}
function SidePanel({className, game}: SidePanelProps): React.JSX.Element {
    return (<div className={className}>
        <TurnManager className='flex basis-2/3 p-5 border-2'></TurnManager>
        <PlayersList className='flex flex-1 p-5 border-2' players={game.players} activePlayer={game.activePlayer}></PlayersList>
    </div>)
}

export default SidePanel;
