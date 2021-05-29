import React from 'react';
import { View } from 'react-native';
import { Directions, FlingGestureHandler } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { darktheme } from '../../data/color';
import { keygen } from '../../utils/keygen';

import { BoardStyles } from './styles';
import Tile from './Tile';

class Board extends React.Component {
    render() {
        return (
            <FlingGestureHandler
                direction={Directions.UP}
                onEnded={() => console.log('up')}
                numberOfPointers={1}
            >
                <FlingGestureHandler
                    direction={Directions.DOWN}
                    onEnded={() => console.log('down')}
                    numberOfPointers={1}
                >
                    <FlingGestureHandler
                        direction={Directions.LEFT}
                        onEnded={() => console.log('left')}
                        numberOfPointers={1}
                    >
                        <FlingGestureHandler
                            direction={Directions.RIGHT}
                            onEnded={() => console.log('right')}
                            numberOfPointers={1}
                        >
                            <View style={{ ...BoardStyles.root, backgroundColor: darktheme.boardColor }}>
                                {[[2, 4, 8, 16], [32, 64, 128, 256], [512, 1024, 2048, 4096], [8192, 16384, 32768, 65536]].map(row => {
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

});

export default connect(mapStateToProps)(Board);
