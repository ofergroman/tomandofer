import {GameState, OpenerCategory} from "./app/consts.ts";
declare global {
    export interface Player {
        id: string;
        name: string;
    }

    export interface Game {
        name?: string;
        id?: string;
        content: string;
        openerCategory?: OpenerCategory;
        starter?: string;
        state: GameState;
        players: Player[];
        activePlayer: Player| null;
        nextPlayer: Player| null;
        totalGameTime: number;
        currentPlayerTime?: number
    }
    export interface ChildProps {
        className?: string;
    }
}
