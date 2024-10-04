export type PlayerListProps = ChildProps & { players: Player[], activePlayer: Player }

export default function PlayersList({players, activePlayer} : PlayerListProps): React.JSX.Element {
    return (
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
    )
}