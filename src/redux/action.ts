import Board from '../game/board';
import { ActionType, GameConfig } from '../utils/types';

export enum ActionName {
    SAVE_GAME_STATE
}

export const saveGameState = (payload: GameConfig): ActionType => ({
    type: ActionName.SAVE_GAME_STATE,
    payload,
});
