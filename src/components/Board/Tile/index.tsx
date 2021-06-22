import React from 'react';
import { Text, View, } from 'react-native';
import { connect } from 'react-redux';

import { screenWidth, TileStyles, } from './styles';

import { ColorSchemeType } from '../../../utils/types';

interface ReduxProps {
    colortheme: ColorSchemeType,
}

interface TileProps {
    dim: number
    number: number
}

class Tile extends React.Component<ReduxProps & TileProps> {
    render() {
        let backgroundColor = this.props.colortheme.tileColors[this.props.number.toString()] || this.props.colortheme.tileColors.large;
        let sides = (screenWidth * 0.8) / this.props.dim; 

        return (
            <View style={{ ...TileStyles.root, backgroundColor, height: sides, width: sides }}>
                <Text style={{ ...TileStyles.text, color: this.props.colortheme.textColor }}>
                    {this.props.number === -1 ? '' : this.props.number}
                </Text>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    colortheme: state.colortheme,
});

export default connect(mapStateToProps)(Tile);
