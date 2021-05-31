import { ActionType, ColorSchemeType, GameConfig, RecordType, } from '../utils/types';

export enum ActionName {
    SAVE_COLOR_CONFIG,
    SAVE_GAME_STATE,
    SAVE_HISTORY,
    SAVE_RECORDS,
}

export const updateColors = (payload: ColorSchemeType): ActionType => ({
    type: ActionName.SAVE_COLOR_CONFIG,
    payload,
});

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
