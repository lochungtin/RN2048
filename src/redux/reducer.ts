import { combineReducers } from 'redux';

import { ActionName } from './action';

import { ActionType, GameConfig } from '../utils/types';

const saveGame = (board: GameConfig = null, action: ActionType) => action.type === ActionName.SAVE_GAME_STATE ? action.payload : board;

export default combineReducers({
    game: saveGame,
})
