import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { TouchableOpacity, Text, View, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import BoardView from '../components/Board';

import { darktheme, lighttheme, } from '../data/color';
import { MainStyles, ScreenStyles, } from './styles';

import Board from '../game/board';
import { clearHistory, updateColors, updateGame, updateHistory, } from '../redux/action';
import { store } from '../redux/store';
import { ColorSchemeType, GameConfig, HistoryType, RecordType, } from '../utils/types';

interface NavProps {
    navigation: StackNavigationProp<any, any>,
}

interface ReduxProps {
    colortheme: ColorSchemeType,
    game: GameConfig,
    history: HistoryType,
    records: Array<RecordType>,
}

class Screen extends React.Component<NavProps & ReduxProps> {
    back = () => {
        if (this.props.history !== null) {
            let curr = { ...this.props.game };
            let prev = { ...this.props.history.prev };
            store.dispatch(updateGame(prev));
            store.dispatch(updateHistory({ curr: prev, prev: curr, }));
        }
    }

    newGame = () => {
        store.dispatch(updateGame({ ...new Board(4) }));
        store.dispatch(clearHistory());
    }

    toggleTheme = () => store.dispatch(updateColors(this.props.colortheme.name === 'dark' ? lighttheme : darktheme));

    render() {
        return (
            <View style={{ ...ScreenStyles.screen, backgroundColor: this.props.colortheme.bgColor }}>
                <Text style={{ ...MainStyles.titleText, color: this.props.colortheme.textColor }}>
                    <Text style={{ color: this.props.colortheme.accentColor }}>2</Text>  0  4  8
                </Text>
                <View style={MainStyles.scoreBar}>
                    <View style={{ ...MainStyles.scoreContainer, backgroundColor: this.props.colortheme.textboxColor }}>
                        <Text style={{ ...MainStyles.scoreLabelText, color: this.props.colortheme.accentColor }}>
                            Score
                        </Text>
                        <Text style={{ ...MainStyles.scoreText, color: this.props.colortheme.textColor }}>
                            {this.props.game.score}
                        </Text>
                    </View>
                    <View style={{ ...MainStyles.scoreContainer, backgroundColor: this.props.colortheme.textboxColor }}>
                        <Text style={{ ...MainStyles.scoreLabelText, color: this.props.colortheme.accentColor }}>
                            High Score
                        </Text>
                        <Text style={{ ...MainStyles.scoreText, color: this.props.colortheme.textColor }}>
                            {this.props.records.length === 0 ? 0 : this.props.records[0].score}
                        </Text>
                    </View>
                </View>
                <View style={MainStyles.functionBarOuter}>
                    <View style={MainStyles.functionBar}>
                        <TouchableOpacity onPress={this.back}>
                            <Icon color={this.props.colortheme.btnColor} name='backup-restore' size={40} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.newGame}>
                            <Icon color={this.props.colortheme.btnColor} name='sync' size={40} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.toggleTheme}>
                            <Icon color={this.props.colortheme.btnColor} name='lightbulb-outline' size={40} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Records')}>
                            <Icon color={this.props.colortheme.accentColor} name='text-box-outline' size={40} />
                        </TouchableOpacity>
                    </View>
                </View>
                <BoardView />
            </View >
        );
    }
}

const mapStateToProps = state => ({
    colortheme: state.colortheme,
    game: state.game,
    history: state.history,
    records: state.records,
});

export default connect(mapStateToProps)(Screen);
