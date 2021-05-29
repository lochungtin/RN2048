import { combineReducers } from 'redux';

import Board from '../game/board';
import { ActionName } from './action';

import { ActionType } from '../utils/types';

const saveBoard = (board: Board = null, action: ActionType) => action.type === ActionName.SAVE_BOARD ? action.payload : board;

export default combineReducers({
    board: saveBoard
})
