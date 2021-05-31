import { ActionType, GameConfig, RecordType, } from '../utils/types';

export enum ActionName {
    SAVE_GAME_STATE,
    SAVE_RECORDS,
}

export const updateRecords = (payload: Array<RecordType>): ActionType => ({
    type: ActionName.SAVE_RECORDS,
    payload
});

export const saveGameState = (payload: GameConfig): ActionType => ({
    type: ActionName.SAVE_GAME_STATE,
    payload,
});
