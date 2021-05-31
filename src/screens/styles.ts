import { Dimensions, StyleSheet } from 'react-native';

export const screenWidth = Dimensions.get('screen').width;

export const ScreenStyles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});

export const MainStyles = StyleSheet.create({
    titleText: {
        fontSize: 45,
        marginBottom: 30,
    },
    scoreBar: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        width: screenWidth * 0.9,
    },
    scoreContainer: {
        alignItems: 'center',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        height: 80,
        justifyContent: 'space-evenly',
        width: screenWidth * 0.42,
    },
    scoreLabelText: {
        fontSize: 12,
    },
    scoreText: {
        fontSize: 17,
    },
    functionBarOuter: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 20,
        width: screenWidth * 0.85,
    },
    functionBar: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: screenWidth * 0.6,
    },
});
