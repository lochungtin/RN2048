import { ActionType, GameConfig, RecordType, } from '../utils/types';

export enum ActionName {
    SAVE_GAME_STATE,
    SAVE_HISTORY,
    SAVE_RECORDS,
}

export const updateGame = (payload: GameConfig): ActionType => ({
    type: ActionName.SAVE_GAME_STATE,
    payload,
});

export const updateHistory = (payload: GameConfig): ActionType => ({
    type: ActionName.SAVE_HISTORY,
    payload,
});

export const updateRecords = (payload: Array<RecordType>): ActionType => ({
    type: ActionName.SAVE_RECORDS,
    payload,
});
