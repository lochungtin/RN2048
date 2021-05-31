import { combineReducers } from 'redux';

import { ActionName } from './action';

import { ActionType, GameConfig, RecordType } from '../utils/types';

const saveGame = (board: GameConfig = null, action: ActionType) => 
    action.type === ActionName.SAVE_GAME_STATE ? action.payload : board;

const saveRecords = (records: Array<RecordType> = [], action: ActionType) =>
    action.type === ActionName.SAVE_RECORDS ? action.payload : records;

export default combineReducers({
    game: saveGame,
    records: saveRecords,
})
