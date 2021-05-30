import { cascade } from "../utils/array";
import { Direction } from "../utils/enums";
import { CoordinatePair, MergingPairs } from "../utils/types";

export default class Board {

    dim: number = 0;
    board: Array<Array<number>> = [];
    score: number = 0;

    constructor(dim: number) {
        this.dim = dim;

        for (let i = 0; i < dim; ++i) {
            let row = [];
            for (let i = 0; i < dim; ++i)
                row.push(-1);

            this.board.push(row);
        }

        Board.newTile(this);
    }

    static swipe = (board: Board, direction: Direction): void => {
        // merge all
        // this.getMergableIndices(direction).forEach(pair => {
        //     this.board[pair.mergee.row][pair.mergee.col] += this.board[pair.merger.row][pair.merger.col];
        //     this.board[pair.merger.row][pair.merger.col] = -1;
        // });
        
        // cascade to direction
        console.log(direction);
        board.board = cascade(board.board, direction);
        console.log(board);

        // add new tile
        let newTile = Board.newTile(board);
    }

    static validate = (board: Board): boolean => {
        for (let i = 0; i < board.dim; ++i) {
            for (let j = 0; j < board.dim; ++j) {
                // board has empty cell
                if (board.board[i][j] == -1)
                    return true;

                // cell can be combined with neighbour
                let neighbours: Array<CoordinatePair> = Board.getNeighbourIndices(board, { row: i, col: j });
                for (let k = 0; i < neighbours.length; ++k) {
                    let pair: CoordinatePair = neighbours[i];

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

    private static getMergableIndices = (board: Board, direction: Direction): Array<MergingPairs> => {
        let rt: Array<MergingPairs> = [];

        let openList: Array<number> = [];
        for (let i = 0; i < board.dim * board.dim; ++i)
            openList.push(i);

        for (let i = 0; i < board.dim; ++i) {
            for (let j = 0; j < board.dim; ++j) {
                // directional ordering
                let row, col;
                switch (direction) {
                    case Direction.down:
                        row = board.dim - i - 2;
                        col = j;
                        break;
                    case Direction.left:
                        row = i;
                        col = j - 1;
                        break;
                    case Direction.right:
                        row = i;
                        col = board.dim - j;
                        break;
                    default:
                        row = i + 1;
                        col = j;
                }

                let toBeMerged = [row, col];
                let tbmNumericIndex = row * board.dim + col;
                let curNumericIndex = i * board.dim + j;
                if (!Board.isValidIndex(board, toBeMerged) && !openList.includes(tbmNumericIndex) && !openList.includes(curNumericIndex))
                    continue;

                // can be merged
                if (board.board[i][j] === board.board[toBeMerged[0]][toBeMerged[j]]) {
                    rt.push({
                        mergee: {
                            row: i,
                            col: j,
                        },
                        merger: {
                            row: toBeMerged[0],
                            col: toBeMerged[1],
                        }
                    });
                    openList.splice(openList.indexOf(tbmNumericIndex), 1);
                    openList.splice(openList.indexOf(curNumericIndex), 1);
                }
            }
        }

        return rt;
    }

    private static getNeighbourIndices = (board: Board, coordinate: CoordinatePair): Array<CoordinatePair> =>
        [[0, 1], [0, -1], [-1, 0], [1, 0]]
            .map(pair => [pair[0] + coordinate.row, pair[1] + coordinate.col])
            .filter(pair => Board.isValidIndex(board, pair))
            .map(pair => ({ row: pair[0], col: pair[1] }));

    private static isValidIndex = (board: Board, pair: Array<number>): boolean =>
        pair[0] >= 0 && pair[1] >= 0 && pair[0] < board.dim && pair[1] < board.dim;

    private static newTile = (board: Board): Array<number> => { 
        let empty: Array<number> = Board.getAvailable(board);
        let selection: number = empty[Math.floor(Math.random() * empty.length)];

        let row: number = Math.floor(selection / board.dim);
        let col: number = selection % board.dim;
        let value: number = (Math.random() > 0.7) ? 4 : 2;

        board.board[row][col] = value;

        return [row, col, value];
    }
}