import Board from '../game/board';
import { ActionType } from '../utils/types';

export enum ActionName {
    SAVE_BOARD
}

export const saveBoard = (payload: Board): ActionType => ({
    type: ActionName.SAVE_BOARD,
    payload,
});
