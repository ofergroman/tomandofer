import React, {useEffect, useMemo} from 'react';
import {useTimer} from "../../../../../contexts/timer.context";

export type GameStatusProps = ChildProps & { activePlayer: Player, nextPlayer: Player, updatePlayerTurn: () => void };

export default function GameStatus({activePlayer, nextPlayer, updatePlayerTurn} : GameStatusProps): React.JSX.Element {
    const {timer, startCountdown} = useTimer();

    const isTimerEnd  = useMemo(() => timer === 0, [timer]);

    useEffect(() => {
        if (activePlayer) {
            startCountdown();
        }
    }, [activePlayer, startCountdown]);

    useEffect(() => {
        if (isTimerEnd) {
            updatePlayerTurn();
        }
    }, [isTimerEnd, updatePlayerTurn]);

    return (
        <div className='flex flex-col p-5 border-2'>
            <div className='font-bold'>{activePlayer?.name}'s Turn</div>
            <div>Turn time left: {timer} seconds</div>
            <div>Next player: {nextPlayer?.name}</div>
        </div>
    )
}