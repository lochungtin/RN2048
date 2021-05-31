import React from 'react';
import { View } from 'react-native';
import { Directions, FlingGestureHandler } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

import GameoverModal from '../GameoverModal';
import Tile from './Tile';

import { darktheme } from '../../data/color';
import { BoardStyles } from './styles';

import Board from '../../game/board';
import { store } from '../../redux/store';
import { updateGame, updateHistory, updateRecords } from '../../redux/action';
import { keygen } from '../../utils/keygen';
import { Direction } from '../../utils/enums';
import { GameConfig, RecordType } from '../../utils/types';

interface ReduxProps {
    game: GameConfig,
    records: Array<RecordType>
}

class BoardView extends React.Component<ReduxProps> {

    state = {
        open: true,
    }

    getHighestTile = (): number => {
        let highest = 0;
        this.props.game.board.forEach(row => row.forEach(num => {
            if (num > highest)
                highest = num;
        }));

        return highest;
    }

    onNewGame = () => {
        store.dispatch(updateGame({ ...new Board(4) }));
        store.dispatch(updateHistory(null));
        this.setState({ open: false });
    }

    onSaveGame = () => {
        let records = [...this.props.records, { highestTile: this.getHighestTile(), score: this.props.game.score }];
        records.sort((a, b) => (b.highestTile + b.score) - (a.highestTile + a.score));

        store.dispatch(updateRecords(records));
        store.dispatch(updateGame({ ...new Board(4) }));
        store.dispatch(updateHistory(null));
        this.setState({ open: false });
    }

    swipe = (direction: Direction): void => {
        let temp = { ...this.props.game };

        // update history
        store.dispatch(updateHistory({ ...temp }));

        // perform swipe
        Board.swipe(temp, direction);

        // validate board
        if (!Board.validate(temp))
            this.setState({ open: true });

        // save game config
        store.dispatch(updateGame(temp));
    }

    render() {
        return (
            <>
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
                <GameoverModal
                    highestTile={this.getHighestTile()}
                    onNewGame={this.onNewGame}
                    onSaveGame={this.onSaveGame}
                    open={this.state.open}
                    score={this.props.game.score}
                />
            </>
        );
    }
}

const mapStateToProps = state => ({
    game: state.game,
    records: state.records,
});

export default connect(mapStateToProps)(BoardView);
