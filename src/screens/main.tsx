import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import Board from '../components/Board';

import { darktheme } from '../data/color';
import { ScreenStyles } from './styles';

class Screen extends React.Component {
    render() {
        return (
            <View style={{ ...ScreenStyles.screen, backgroundColor: darktheme.bgColor }}>
                <Board />
            </View >
        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(Screen);
