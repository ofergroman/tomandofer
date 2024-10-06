import React from 'react';
import TurnManager from './turn manager/TurnManager.tsx';
import PlayersList from './players-list/PlayersList.tsx';
import GameStatus from './game-status/GameStatus.tsx';
import {TimerProvider} from '../../contexts/timer.context.tsx';
import {TURN_TIME} from "../../consts.ts";

export type SidePanelProps = ChildProps & { game: Game, updatePlayerTurn: () => void };
function SidePanel({className, game, updatePlayerTurn}: SidePanelProps): React.JSX.Element {
    return (
        <TimerProvider initialTime={TURN_TIME}>
            <div className={className}>
            <GameStatus className='flex basis-2/3 p-5 border-2' players={game.players} activePlayer={game.activePlayer} nextPlayer={game.nextPlayer} updatePlayerTurn={updatePlayerTurn} ></GameStatus>
            <TurnManager className='flex basis-2/3 p-5 border-2'></TurnManager>
            <PlayersList className='flex flex-1 p-5 border-2' players={game.players} activePlayer={game.activePlayer}></PlayersList>
            </div>
        </TimerProvider>
    )
}

export default SidePanel;
