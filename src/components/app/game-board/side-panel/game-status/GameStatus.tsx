import React, {useEffect, useRef} from 'react';
import {useTimer} from "../../../contexts/timer.context.tsx";
import {TURN_TIME} from "../../../consts.ts";

export type GameStatusProps = ChildProps & { activePlayer: Player, nextPlayer: Player, updatePlayerTurn: () => void };

export default function GameStatus({activePlayer, nextPlayer, updatePlayerTurn} : GameStatusProps): React.JSX.Element {
    const {timer, startCountdown} = useTimer();
    const prevTimerRef = useRef<number | null>(null);

    useEffect(() => {
        if (activePlayer) {
            startCountdown(TURN_TIME);
        }
    }, [activePlayer, startCountdown]);

    useEffect(() => {
        if (timer === 0 && prevTimerRef.current !== 0) {
            updatePlayerTurn();
        }
        // TODO: Is this a proper way to handle this?
        prevTimerRef.current = timer;
    }, [timer, updatePlayerTurn]);

    return (
        <div className='flex flex-col p-5 border-2'>
            <div className='font-bold'>{activePlayer?.name}'s Turn</div>
            <div>Turn time left: {timer} seconds</div>
            <div>Next player: {nextPlayer?.name}</div>
        </div>
    )
}