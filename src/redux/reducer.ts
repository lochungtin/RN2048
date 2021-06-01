import { combineReducers } from 'redux';

import Board from '../game/board';
import { ActionName } from './action';

import { darktheme } from '../data/color';

import { ActionType, ColorSchemeType, GameConfig, HistoryType, RecordType, } from '../utils/types';

const saveColors = (theme: ColorSchemeType = darktheme, action: ActionType) =>
    action.type === ActionName.SAVE_COLOR_CONFIG ? action.payload : theme;

const saveGame = (board: GameConfig = new Board(4), action: ActionType) =>
    action.type === ActionName.SAVE_GAME_STATE ? action.payload : board;

const emptyHistory = { curr: undefined, prev: undefined };
const saveHistory = (board: HistoryType = emptyHistory, action: ActionType) => {
    switch (action.type) {
        case ActionName.CLEAR_HISTORY:
            return emptyHistory;
        case ActionName.SAVE_HISTORY:
            return action.payload;
        default:
            return board;
    }
}

const saveRecords = (records: Array<RecordType> = [], action: ActionType) =>
    action.type === ActionName.SAVE_RECORDS ? action.payload : records;

export default combineReducers({
    colortheme: saveColors,
    game: saveGame,
    history: saveHistory,
    records: saveRecords,
});
