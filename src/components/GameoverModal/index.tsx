import React from 'react';
import { Text, TouchableOpacity, View, } from 'react-native';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';

import { ModalStyles } from './styles';

import { ColorSchemeType } from '../../utils/types';

interface ReduxProps {
    colortheme: ColorSchemeType,
}

interface ModalProps {
    onSaveGame: () => void,
    onNewGame: () => void,
    score: number,
    highestTile: number,
    open: boolean,
}

class BoardView extends React.Component<ReduxProps & ModalProps> {

    render() {
        return (
            <Modal
                backdropOpacity={0.9}
                isVisible={this.props.open}
            >
                <View style={ModalStyles.modalRoot}>
                    <Text style={{ ...ModalStyles.text, color: this.props.colortheme.textColor }}>
                        <Text style={{ color: this.props.colortheme.accentColor }}>G  A  M  E</Text>  O  V  E  R
                        </Text>
                    <View style={ModalStyles.statsContainer}>
                        <View style={ModalStyles.statsRow}>
                            <Text style={{ ...ModalStyles.text, color: this.props.colortheme.accentColor }}>
                                Score :
                            </Text>
                            <Text style={{ ...ModalStyles.text, color: this.props.colortheme.textColor }}>
                                {this.props.score}
                            </Text>
                        </View>
                        <View style={ModalStyles.statsRow}>
                            <Text style={{ ...ModalStyles.text, color: this.props.colortheme.accentColor }}>
                                Highest Tile :
                            </Text>
                            <Text style={{ ...ModalStyles.text, color: this.props.colortheme.textColor }}>
                                {this.props.highestTile}
                            </Text>
                        </View>
                    </View>
                    <View style={ModalStyles.optionBar}>
                        <TouchableOpacity onPress={this.props.onSaveGame}>
                            <Text style={{ ...ModalStyles.text, color: this.props.colortheme.accentColor }}>
                                SAVE RECORD
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.props.onNewGame}>
                            <Text style={{ ...ModalStyles.text, color: this.props.colortheme.textColor }}>
                                NEW GAME
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    }
}

const mapStateToProps = state => ({
    colortheme: state.colortheme
});

export default connect(mapStateToProps)(BoardView);
