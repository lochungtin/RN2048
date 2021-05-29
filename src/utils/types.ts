import { ActionName } from "../redux/action";

// board util types
export interface CoordinatePair {
    row: number;
    col: number;
}

export interface MergingPairs {
    mergee: CoordinatePair,
    merger: CoordinatePair,
}

// redux types
export interface ActionType {
    type: ActionName,
    payload?: any
}
