import { Dimensions, StyleSheet, } from 'react-native';

export const screenWidth = Dimensions.get('screen').width;

export const TileStyles = StyleSheet.create({
    root: {
        alignItems: 'center',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        marginHorizontal: 5,
        marginVertical: 5,
    },
    text: {
        fontSize: 20,
    },
});
