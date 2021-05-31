import { Dimensions, StyleSheet, } from 'react-native';

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

export const RecordStyles = StyleSheet.create({
    topBar: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        width: screenWidth * 0.9,
    },
    titleText: {
        fontSize: 25
    },
    recordBar: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        width: screenWidth * 0.8,
    },
    separatorLine: {
        height: 2,
        margin: 20,
        width: screenWidth * 0.9,
    },
    recordRankText: {
        width: 70,
    },
    recordNumberText: {
        textAlign: 'right',
        width: 130,
    },
    recordText: {
        fontSize: 17,
    },
});
