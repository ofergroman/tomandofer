export enum GameState {
    Create,
    InGame,
    Ended,
}

export const TURN_TIME = 10; // SETTING 10 FOR DEBUGGING PURPOSES;

const OpenerCategory = {
    Funny: 'funny',
    Mystery: 'mystery',
    Random: 'random'
} as const;

export type OpenerCategory = (typeof OpenerCategory)[keyof typeof OpenerCategory];