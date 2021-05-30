import { Direction } from "./enums";

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

const cascadeHorizontal = (arr: Array<Array<number>>, direction: Direction): Array<Array<number>> => {
    let dim: number = arr.length;
    // filter all "empty" elements
    let rt: Array<Array<number>> = arr.map(row => row.filter(cell => cell !== -1));

    // merge neighbours
    for (let i = 0; i < rt.length; ++i) {
        let row = rt[i];
        for (let j = 0; j < row.length; ++j) {
            let index = (direction === Direction.left ? (2 * j) : row.length) - j;
            let nextIndex = index + (direction === Direction.left ? 1 : -1);

            if (nextIndex >= 0 && nextIndex < row.length && row[index] === row[nextIndex]) {
                row[index] *= 2;
                row[nextIndex] = -1;
            }
        }
    }

    // refilter after merge
    rt = rt.map(row => row.filter(cell => cell !== -1));

    // append or insert
    if (direction === Direction.left)
        return rt.map(row => [...row, ...new Array(dim - row.length).fill(-1)]);
    else
        return rt.map(row => [...new Array(dim - row.length).fill(-1), ...row]);
}

export const cascade = (arr: Array<Array<number>>, direction: Direction): Array<Array<number>> => {
    if (direction === Direction.left || direction === Direction.right)
        return cascadeHorizontal(arr, direction);
    else
        // rotate, cascade, and rerotate
        return rotate(
            cascadeHorizontal(
                rotate(arr, (direction === Direction.down ? 1 : 0)),
                Direction.right
            ),
            (direction === Direction.up ? 1 : 0)
        );
}

