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

        this.newTile();
    }

    swipe = (direction: Direction): void => {
        // merge all
        // this.getMergableIndices(direction).forEach(pair => {
        //     this.board[pair.mergee.row][pair.mergee.col] += this.board[pair.merger.row][pair.merger.col];
        //     this.board[pair.merger.row][pair.merger.col] = -1;
        // });
        
        // cascade to direction
        console.log(direction);
        this.board = (cascade(this.board, direction));

        // add new tile
        let newTile = this.newTile();
    }

    validate = (): boolean => {
        for (let i = 0; i < this.dim; ++i) {
            for (let j = 0; j < this.dim; ++j) {
                // board has empty cell
                if (this.board[i][j] == -1)
                    return true;

                // cell can be combined with neighbour
                let neighbours: Array<CoordinatePair> = this.getNeighbourIndices({ row: i, col: j });
                for (let k = 0; i < neighbours.length; ++k) {
                    let pair: CoordinatePair = neighbours[i];

                    if (this.board[pair.row][pair.col] == this.board[i][j])
                        return true;
                }
            }
        }
        return false;
    }

    private getAvailable = (): Array<number> => {
        let rt: Array<number> = [];
        this.board.forEach((row, rIndex) => row.forEach((cell, cIndex) => {
            if (cell == -1)
                rt.push(rIndex * this.dim + cIndex);
        }));

        return rt;
    }

    private getMergableIndices = (direction: Direction): Array<MergingPairs> => {
        let rt: Array<MergingPairs> = [];

        let openList: Array<number> = [];
        for (let i = 0; i < this.dim * this.dim; ++i)
            openList.push(i);

        for (let i = 0; i < this.dim; ++i) {
            for (let j = 0; j < this.dim; ++j) {
                // directional ordering
                let row, col;
                switch (direction) {
                    case Direction.down:
                        row = this.dim - i - 2;
                        col = j;
                        break;
                    case Direction.left:
                        row = i;
                        col = j - 1;
                        break;
                    case Direction.right:
                        row = i;
                        col = this.dim - j;
                        break;
                    default:
                        row = i + 1;
                        col = j;
                }

                let toBeMerged = [row, col];
                let tbmNumericIndex = row * this.dim + col;
                let curNumericIndex = i * this.dim + j;
                if (!this.isValidIndex(toBeMerged) && !openList.includes(tbmNumericIndex) && !openList.includes(curNumericIndex))
                    continue;

                // can be merged
                if (this.board[i][j] === this.board[toBeMerged[0]][toBeMerged[j]]) {
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

    private getNeighbourIndices = (coordinate: CoordinatePair): Array<CoordinatePair> =>
        [[0, 1], [0, -1], [-1, 0], [1, 0]]
            .map(pair => [pair[0] + coordinate.row, pair[1] + coordinate.col])
            .filter(this.isValidIndex)
            .map(pair => ({ row: pair[0], col: pair[1] }));

    private isValidIndex = (pair: Array<number>): boolean =>
        pair[0] >= 0 && pair[1] >= 0 && pair[0] < this.dim && pair[1] < this.dim;

    private newTile = (): Array<number> => {
        let empty: Array<number> = this.getAvailable();
        let selection: number = empty[Math.floor(Math.random() * empty.length)];

        let row: number = Math.floor(selection / this.dim);
        let col: number = selection % this.dim;
        let value: number = (Math.random() > 0.7) ? 4 : 2;

        this.board[row][col] = value;

        return [row, col, value];
    }
}