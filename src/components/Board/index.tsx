import React from 'react';
import { View } from 'react-native';
import { Directions, FlingGestureHandler } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

import Tile from './Tile';

import { darktheme } from '../../data/color';
import { BoardStyles } from './styles';

import Board from '../../game/board';
import { store } from '../../redux/store';
import { saveGameState } from '../../redux/action';
import { keygen } from '../../utils/keygen';
import { Direction } from '../../utils/enums';
import { GameConfig } from '../../utils/types';

interface ReduxProps {
    game: GameConfig
}

class BoardView extends React.Component<ReduxProps> {

    constructor(props) {
        super(props);

        if (props.game === null)
            store.dispatch(saveGameState({ ...new Board(4) }));
    }

    swipe = (direction: Direction): void => {
        
    }

    render() {
        return (
            <FlingGestureHandler direction={Directions.UP} onEnded={() => this.swipe(Direction.up)}>
                <FlingGestureHandler direction={Directions.DOWN} onEnded={() => this.swipe(Direction.down)} >
                    <FlingGestureHandler direction={Directions.LEFT} onEnded={() => this.swipe(Direction.left)}>
                        <FlingGestureHandler direction={Directions.RIGHT} onEnded={() => this.swipe(Direction.right)}>
                            <View style={{ ...BoardStyles.root, backgroundColor: darktheme.boardColor }}>
                                {this.props.game.board.map(row => {
                                    return (
                                        <View key={keygen()} style={BoardStyles.row}>
                                            {row.map(cell => {
                                                return (
                                                    <Tile key={keygen()} dim={4} number={cell} />
                                                );
                                            })}
                                        </View>
                                    );
                                })}
                            </View>
                        </FlingGestureHandler>
                    </FlingGestureHandler>
                </FlingGestureHandler>
            </FlingGestureHandler>
        );
    }
}

const mapStateToProps = state => ({
    game: state.game,
});

export default connect(mapStateToProps)(BoardView);
