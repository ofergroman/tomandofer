import {GameState} from "./app/consts.ts";
declare global {
    export interface Player {
        id: string;
        name: string;
    }

    export interface Game {
        name?: string;
        id?: string;
        content: string;
        starter?: string;
        state: GameState;
        players: Player[];
        activePlayer: Player| null;
        totalGameTime: number;
        timePerTurn: number
    }
    export interface ChildProps {
        className?: string;
    }
}
