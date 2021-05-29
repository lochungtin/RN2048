import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('screen').width;

export const BoardStyles = StyleSheet.create({
    root: {
        alignItems: 'center',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 5,
    },
    row: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    }
});
