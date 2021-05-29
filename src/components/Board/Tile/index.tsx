import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import { darktheme } from '../../../data/color';
import { screenWidth, TileStyles } from './styles';

interface TileProps {
    dim: number
    number: number
}

class Tile extends React.Component<TileProps> {
    render() {
        let backgroundColor = darktheme.tileColors[this.props.number.toString()] || darktheme.tileColors.large;
        let sides = (screenWidth * 0.8) / this.props.dim; 

        return (
            <View style={{ ...TileStyles.root, backgroundColor, height: sides, width: sides }}>
                <Text style={{ ...TileStyles.text, color: darktheme.textColor }}>
                    {this.props.number}
                </Text>
            </View>
        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(Tile);
