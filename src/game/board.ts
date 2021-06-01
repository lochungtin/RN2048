import { cascade, compare } from "../utils/array";
import { Direction } from "../utils/enums";
import { CoordinatePair } from "../utils/types";

export default class Board {

    dim: number = 0;
    board: Array<Array<number>> = [];
    score: number = 0;

    constructor(dim: number) {
        this.dim = dim;
        this.score = 0;

        for (let i = 0; i < dim; ++i) {
            let row = [];
            for (let i = 0; i < dim; ++i)
                row.push(-1);

            this.board.push(row);
        }

        Board.newTile(this);
    }

    static swipe = (board: Board, direction: Direction): void => {
        let temp = cascade(board.board, direction);

        if (!compare(board.board, temp.board))
            Board.newTile(board);
        
        board.board = temp.board;
        board.score += temp.score;
    }

    static validate = (board: Board): boolean => {
        for (let i = 0; i < board.dim; ++i) {
            for (let j = 0; j < board.dim; ++j) {
                // board has empty cell
                if (board.board[i][j] == -1)
                    return true;

                // cell can be combined with neighbour
                let neighbours: Array<CoordinatePair> = Board.getNeighbourIndices(board, { row: i, col: j });
                for (let k = 0; k < neighbours.length; ++k) {
                    let pair: CoordinatePair = neighbours[k];

                    if (board.board[pair.row][pair.col] == board.board[i][j])
                        return true;
                }
            }
        }
        return false;
    }

    private static getAvailable = (board: Board): Array<number> => {
        let rt: Array<number> = [];
        board.board.forEach((row, rIndex) => row.forEach((cell, cIndex) => {
            if (cell == -1)
                rt.push(rIndex * board.dim + cIndex);
        }));

        return rt;
    }

    private static getNeighbourIndices = (board: Board, coordinate: CoordinatePair): Array<CoordinatePair> =>
        [[0, 1], [0, -1], [-1, 0], [1, 0]]
            .map(pair => [pair[0] + coordinate.row, pair[1] + coordinate.col])
            .filter(pair => Board.isValidIndex(board, pair))
            .map(pair => ({ row: pair[0], col: pair[1] }));

    private static isValidIndex = (board: Board, pair: Array<number>): boolean =>
        pair[0] >= 0 && pair[1] >= 0 && pair[0] < board.dim && pair[1] < board.dim;

    private static newTile = (board: Board): void => { 
        let empty: Array<number> = Board.getAvailable(board);
        if (empty.length === 0)
            return;

        let selection: number = empty[Math.floor(Math.random() * empty.length)];

        let row: number = Math.floor(selection / board.dim);
        let col: number = selection % board.dim;
        let value: number = (Math.random() > 0.7) ? 4 : 2;

        board.board[row][col] = value;
    }
}