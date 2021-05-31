import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react';
import { TouchableOpacity, Text, View, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import BoardView from '../components/Board';

import { darktheme } from '../data/color';
import { MainStyles, ScreenStyles } from './styles';

import Board from '../game/board';
import { updateGame, updateHistory } from '../redux/action';
import { store } from '../redux/store';
import { GameConfig } from '../utils/types';

interface NavProps {
    navigation: StackNavigationProp<any, any>,
}

interface ReduxProps {
    game: GameConfig,
    history: GameConfig,
}

class Screen extends React.Component<NavProps & ReduxProps> {

    constructor(props) {
        super(props);

        if (props.game === null)
            store.dispatch(updateGame({ ...new Board(4) }));
    }

    back = () => {
        if (this.props.history !== null) {
            let curGame = { ...this.props.game };
            store.dispatch(updateGame(this.props.history));
            store.dispatch(updateHistory(curGame));
        }
    }

    newGame = () => {
        store.dispatch(updateGame({ ...new Board(4) }));
        store.dispatch(updateHistory(null));
    }

    render() {
        return (
            <View style={{ ...ScreenStyles.screen, backgroundColor: darktheme.bgColor }}>
                <Text style={{ ...MainStyles.titleText, color: darktheme.textColor }}>
                    <Text style={{ color: darktheme.accentColor }}>2</Text>  0  4  8
                </Text>
                <View style={MainStyles.scoreBar}>
                    <View style={{ ...MainStyles.scoreContainer, backgroundColor: darktheme.textboxColor }}>
                        <Text style={{ ...MainStyles.scoreLabelText, color: darktheme.accentColor }}>
                            Score
                        </Text>
                        <Text style={{ ...MainStyles.scoreText, color: darktheme.textColor }}>
                            {this.props.game.score}
                        </Text>
                    </View>
                    <View style={{ ...MainStyles.scoreContainer, backgroundColor: darktheme.textboxColor }}>
                        <Text style={{ ...MainStyles.scoreLabelText, color: darktheme.accentColor }}>
                            High Score
                        </Text>
                        <Text style={{ ...MainStyles.scoreText, color: darktheme.textColor }}>
                            {10000}
                        </Text>
                    </View>
                </View>
                <View style={MainStyles.functionBarOuter}>
                    <View style={MainStyles.functionBar}>
                        <TouchableOpacity onPress={this.back}>
                            <Icon color={darktheme.btnColor} name='backup-restore' size={40} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.newGame}>
                            <Icon color={darktheme.btnColor} name='sync' size={40} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <Icon color={darktheme.btnColor} name='lightbulb-outline' size={40} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Records')}>
                            <Icon color={darktheme.accentColor} name='text-box-outline' size={40} />
                        </TouchableOpacity>
                    </View>
                </View>
                <BoardView />
            </View >
        );
    }
}

const mapStateToProps = state => ({
    game: state.game,
    history: state.history,
});

export default connect(mapStateToProps)(Screen);
