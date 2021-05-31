import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react';
import { TouchableOpacity, Text, View, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import BoardView from '../components/Board';

import { darktheme } from '../data/color';
import { MainStyles, ScreenStyles } from './styles';

import Board from '../game/board';
import { saveGameState } from '../redux/action';
import { store } from '../redux/store';

interface NavProps {
    navigation: StackNavigationProp<any, any>
}

class Screen extends React.Component<NavProps> {

    newGame = () => store.dispatch(saveGameState({ ...new Board(4) }));

    render() {
        return (
            <View style={{ ...ScreenStyles.screen, backgroundColor: darktheme.bgColor }}>
                <Text style={{ ...MainStyles.titleText, color: darktheme.textColor }}>
                    2  0  4  8
                </Text>
                <View style={MainStyles.scoreBar}>
                    <View style={{ ...MainStyles.scoreContainer, backgroundColor: darktheme.textboxColor }}>
                        <Text style={{ ...MainStyles.scoreLabelText, color: darktheme.textColor }}>
                            Score
                        </Text>
                        <Text style={{ ...MainStyles.scoreText, color: darktheme.textColor }}>
                            {10000}
                        </Text>
                    </View>
                    <View style={{ ...MainStyles.scoreContainer, backgroundColor: darktheme.textboxColor }}>
                        <Text style={{ ...MainStyles.scoreLabelText, color: darktheme.textColor }}>
                            High Score
                        </Text>
                        <Text style={{ ...MainStyles.scoreText, color: darktheme.textColor }}>
                            {10000}
                        </Text>
                    </View>
                </View>
                <View style={MainStyles.functionBarOuter}>
                    <View style={MainStyles.functionBar}>
                        <TouchableOpacity onPress={() => { }}>
                            <Icon color={darktheme.btnColor} name='backup-restore' size={40} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.newGame}>
                            <Icon color={darktheme.btnColor} name='sync' size={40} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <Icon color={darktheme.btnColor} name='lightbulb-outline' size={40} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Records')}>
                            <Icon color={darktheme.btnColor} name='text-box-outline' size={40} />
                        </TouchableOpacity>
                    </View>
                </View>
                <BoardView />
            </View >
        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(Screen);
