import React from 'react';
import { TouchableOpacity, Text, View, } from 'react-native';
import { connect } from 'react-redux';

import BoardView from '../components/Board';

import { darktheme } from '../data/color';
import { ScreenStyles } from './styles';

import Board from '../game/board';
import { saveBoard } from '../redux/action';
import { store } from '../redux/store';

class Screen extends React.Component {
    render() {
        return (
            <View style={{ ...ScreenStyles.screen, backgroundColor: darktheme.bgColor }}>
                <View style={{ height: 200 }} />
                <TouchableOpacity onPress={() => store.dispatch(saveBoard(new Board(4)))} style={{ backgroundColor: darktheme.btnColor }}>
                    <Text style={{ color: darktheme.textColor }}>
                        New Game
                    </Text>
                </TouchableOpacity>
                <View style={{ height: 100 }} />
                <BoardView />
            </View >
        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(Screen);
