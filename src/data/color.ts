import { ColorSchemeType, TileColorSchemeType, } from "../utils/types";

const tileColors: TileColorSchemeType = {
    '-1': '#1c1b1b',
    '2': '#a3948b',
    '4': '#c2a899',
    '8': '#dbb49e',
    '16': '#ebaf8d',
    '32': '#ed9b6d',
    '64': '#eb864d',
    '128': '#f07b3a',
    '256': '#eb702d',
    '512': '#cf5d1f',
    '1024': '#b84e14',
    '2048': '#9e3f0b',
    large: '#3d3934',
}

export const darktheme: ColorSchemeType = {
    name: 'dark',
    bgColor: '#1E1E1E',
    boardColor: '#151515',
    tileColors,
    textColor: '#E0E0E0',
    textboxColor: '#272727',
    btnColor: '#A0A0A0',
    accentColor: '#EB864D',
}

export const lighttheme: ColorSchemeType = {
    name: 'light',
    bgColor: '#EFEFEF',
    boardColor: '#CFCFCF',
    tileColors: {
        ...tileColors,
        '-1': '#DFDFDF',
        '2': '#C7BAB3',
    },
    textColor: '#0F0F0F',
    textboxColor: '#CFCFCF',
    btnColor: '#4F4F4F',
    accentColor: '#EB864D',
}
