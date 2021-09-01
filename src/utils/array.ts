import { Direction } from "./enums";
import { GameConfig } from "./types";

const rotate = (arr: Array<Array<number>>, direction: Direction): Array<Array<number>> => {
    let rt: Array<Array<number>> = [];
    let dim: number = arr.length;

    for (let i = 0; i < dim; ++i) {
        let row = [];
        for (let j = 0; j < dim; ++j)
            row.push(arr[(dim - j - 1) * (1 - direction) + (direction * j)][i * (1 - direction) + (dim - i - 1) * direction]);

        rt.push(row);
    }

    return rt;
}

const cascadeHorizontal = (arr: Array<Array<number>>, direction: Direction): GameConfig => {
    let dim: number = arr.length;
    // filter all "empty" elements
    let rt: Array<Array<number>> = arr.map(row => row.filter(cell => cell !== -1));

    // merge neighbours
    let score: number = 0;
    for (let i = 0; i < rt.length; ++i) {
        let row = rt[i];
        for (let j = 0; j < row.length; ++j) {
            let index = (direction === Direction.left ? (2 * j) : row.length) - j;
            let nextIndex = index + (direction === Direction.left ? 1 : -1);

            if (nextIndex >= 0 && nextIndex < row.length && row[index] === row[nextIndex]) {
                row[index] *= 2;
                row[nextIndex] = -1;
                score += row[index];
            }
        }
    }

    // refilter after merge
    rt = rt.map(row => row.filter(cell => cell !== -1));

    // append or insert
    if (direction === Direction.left)
        return {
            board: rt.map(row => [...row, ...new Array(dim - row.length).fill(-1)]),
            dim,
            score,
        };
    else
        return {
            board: rt.map(row => [...new Array(dim - row.length).fill(-1), ...row]),
            dim,
            score,
        };
}

export const cascade = (arr: Array<Array<number>>, direction: Direction): GameConfig => {
    if (direction === Direction.left || direction === Direction.right)
        return cascadeHorizontal(arr, direction);
    else {
        // rotate, cascade, and rerotate
        let game = cascadeHorizontal( rotate(arr, (direction === Direction.down ? 1 : 0)), Direction.right);
        return {
            board: rotate(game.board, (direction === Direction.up ? 1 : 0)),
            dim: game.dim,
            score: game.score,
        };
    }
}

export const compare = (board1: Array<Array<number>>, board2: Array<Array<number>>): boolean => {
    // assuming they are of same dimensions
    for (let i = 0; i < board1.length; ++i) {
        for (let j = 0; j < board1[i].length; ++j) {
            if (board1[i][j] !== board2[i][j])
                return false;
        }
    }
    return true;
}
