import React from 'react';

export type PlayerListProps = ChildProps & { players: Player[], activePlayer: Player | null }

export default function PlayersList({players, activePlayer, className}: PlayerListProps): React.JSX.Element {
    return (
        <div className={className}>
            <ul>
                {players.map((player) => {
                    const isActive = player.id === activePlayer?.id;
                    return (
                        <li key={player.id} className="flex flex-col">
                            <div className={isActive ? 'font-bold' : ''}>{player.name}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}