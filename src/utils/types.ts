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

// color types
export interface ColorSchemeType {
    bgColor: string,
    boardColor: string,
    tileColors: TileColorSchemeType,
    textColor: string,
    textboxColor: string,
    btnColor: string,
    accentColor: string,
}

export interface TileColorSchemeType {
    '-1': string,
    '2': string,
    '4': string,
    '8': string,
    '16': string,
    '32': string,
    '64': string,
    '128': string,
    '256': string,
    '512': string,
    '1024': string,
    '2048': string,
    large: string,
}
