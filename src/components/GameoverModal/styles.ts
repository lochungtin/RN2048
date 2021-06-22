import { Dimensions, StyleSheet, } from 'react-native';

const screenWidth = Dimensions.get('screen').width;

export const ModalStyles = StyleSheet.create({
    modalRoot: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 300,
    },
    text: {
        fontSize: 20,
    },
    statsContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 70,
    },
    statsRow: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: screenWidth * 0.7,
    },
    optionBar: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: screenWidth * 0.7,
    },
});
