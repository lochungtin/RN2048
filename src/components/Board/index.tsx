import React from 'react';
import { View } from 'react-native';
import { Directions, FlingGestureHandler } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

import Tile from './Tile';

import { darktheme } from '../../data/color';
import { BoardStyles } from './styles';

import Board from '../../game/board';
import { keygen } from '../../utils/keygen';
import { store } from '../../redux/store';
import { saveBoard } from '../../redux/action';

interface ReduxProps {
    board: Board,
}

class BoardView extends React.Component<ReduxProps> {

    constructor(props) {
        super(props);

        if (props.board === null)
            store.dispatch(saveBoard(new Board(4)));
    }

    render() {
        console.log(this.props.board);
        return (
            <FlingGestureHandler direction={Directions.UP} onEnded={() => console.log('up')}>
                <FlingGestureHandler direction={Directions.DOWN} onEnded={() => console.log('down')} >
                    <FlingGestureHandler direction={Directions.LEFT} onEnded={() => console.log('left')}>
                        <FlingGestureHandler direction={Directions.RIGHT} onEnded={() => console.log('right')}>
                            <View style={{ ...BoardStyles.root, backgroundColor: darktheme.boardColor }}>
                                {this.props.board.board.map(row => {
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
    board: state.board,
});

export default connect(mapStateToProps)(BoardView);
