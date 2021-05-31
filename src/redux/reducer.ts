import { combineReducers } from 'redux';

import { ActionName } from './action';

import { ActionType, ColorSchemeType, GameConfig, RecordType } from '../utils/types';
import { darktheme } from '../data/color';

const saveColors = (theme: ColorSchemeType = darktheme, action: ActionType) => 
    action.type === ActionName.SAVE_COLOR_CONFIG ? action.payload : theme;

const saveGame = (board: GameConfig = null, action: ActionType) => 
    action.type === ActionName.SAVE_GAME_STATE ? action.payload : board;

const saveHistory = (board: GameConfig = null, action: ActionType) => 
    action.type === ActionName.SAVE_HISTORY ? action.payload : board;

const saveRecords = (records: Array<RecordType> = [], action: ActionType) =>
    action.type === ActionName.SAVE_RECORDS ? action.payload : records;

export default combineReducers({
    colortheme: saveColors,
    game: saveGame,
    history: saveHistory,
    records: saveRecords,
})
