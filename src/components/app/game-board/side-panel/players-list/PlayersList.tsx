export type PlayerListProps = ChildProps & { players: Player[] }

export default function PlayersList({players} : PlayerListProps): React.JSX.Element {
    return (
        <ul>
            {players.map((player) => {
                return (
                    <li key={player.id} className="flex flex-col">
                        <div>{player.name}</div>
                    </li>
                )
            })}
        </ul>
    )
}