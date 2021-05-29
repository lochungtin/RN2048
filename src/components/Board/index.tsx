import React from 'react';
import { View } from 'react-native';
import { Directions, FlingGestureHandler } from 'react-native-gesture-handler';
import {connect} from 'react-redux';

import { BoardStyles } from './styles';

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
                                <View style={BoardStyles.root} />
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
