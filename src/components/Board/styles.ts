import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('screen').width;

export const BoardStyles = StyleSheet.create({
    root: {
        backgroundColor: '#1e1e1e',
        height: screenWidth * 0.9,
        width: screenWidth * 0.9
    }
});
