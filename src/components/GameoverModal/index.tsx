import React from 'react';
import { TouchableOpacity, Text, View, } from 'react-native';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';

import { darktheme } from '../../data/color';
import { ModalStyles } from './styles';

import { GameConfig } from '../../utils/types';

interface ModalProps {
    onSaveGame: () => void,
    onNewGame: () => void,
    score: number,
    highestTile: number,
    open: boolean,
}

class BoardView extends React.Component<ModalProps> {

    render() {
        return (
            <Modal
                backdropOpacity={0.9}
                isVisible={this.props.open}
            >
                <View style={ModalStyles.modalRoot}>
                    <Text style={{ ...ModalStyles.text, color: darktheme.textColor }}>
                        <Text style={{ color: darktheme.accentColor }}>G  A  M  E</Text>  O  V  E  R
                        </Text>
                    <View style={ModalStyles.statsContainer}>
                        <View style={ModalStyles.statsRow}>
                            <Text style={{ ...ModalStyles.text, color: darktheme.accentColor }}>
                                Score :
                            </Text>
                            <Text style={{ ...ModalStyles.text, color: darktheme.textColor }}>
                                {this.props.score}
                            </Text>
                        </View>
                        <View style={ModalStyles.statsRow}>
                            <Text style={{ ...ModalStyles.text, color: darktheme.accentColor }}>
                                Highest Tile :
                            </Text>
                            <Text style={{ ...ModalStyles.text, color: darktheme.textColor }}>
                                {this.props.highestTile}
                            </Text>
                        </View>
                    </View>
                    <View style={ModalStyles.optionBar}>
                        <TouchableOpacity onPress={this.props.onSaveGame}>
                            <Text style={{ ...ModalStyles.text, color: darktheme.accentColor }}>
                                SAVE RECORD
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.props.onNewGame}>
                            <Text style={{ ...ModalStyles.text, color: darktheme.textColor }}>
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

});

export default connect(mapStateToProps)(BoardView);
