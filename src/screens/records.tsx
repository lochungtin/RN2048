import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import { RecordStyles, ScreenStyles, } from './styles';

import { keygen } from '../utils/keygen';
import { ColorSchemeType, RecordType, } from '../utils/types';

interface NavProps {
    navigation: StackNavigationProp<any, any>,
}

interface ReduxProps {
    colortheme: ColorSchemeType,
    records: Array<RecordType>,
}

class Screen extends React.Component<NavProps & ReduxProps> {
    render() {
        return (
            <View style={{ ...ScreenStyles.screen, backgroundColor: this.props.colortheme.bgColor }}>
                <View style={RecordStyles.topBar}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}>
                        <Icon color={this.props.colortheme.textColor} name='chevron-left' size={40} />
                    </TouchableOpacity>
                    <Text style={{...RecordStyles.titleText, color: this.props.colortheme.accentColor}}>
                        M Y   R E C O R D S
                    </Text>
                </View>
                <View key={keygen()} style={RecordStyles.recordBar}>
                    <Text style={{ ...RecordStyles.recordRankText, ...RecordStyles.recordText, color: this.props.colortheme.accentColor }}>
                        Rank
                    </Text>
                    <Text style={{ ...RecordStyles.recordNumberText, ...RecordStyles.recordText, color: this.props.colortheme.textColor }}>
                        Score
                    </Text>
                    <Text style={{ ...RecordStyles.recordNumberText, ...RecordStyles.recordText, color: this.props.colortheme.textColor }}>
                        Highest Tile
                    </Text>
                </View>
                <View style={{ ...RecordStyles.separatorLine, backgroundColor: this.props.colortheme.textboxColor }} />
                <ScrollView>
                    {this.props.records.map((record, index) => {
                        return (
                            <View key={keygen()} style={RecordStyles.recordBar}>
                                <Text style={{ ...RecordStyles.recordRankText, ...RecordStyles.recordText, color: this.props.colortheme.accentColor }}>
                                    {index}.
                                </Text>
                                <Text style={{ ...RecordStyles.recordNumberText, ...RecordStyles.recordText, color: this.props.colortheme.textColor }}>
                                    {record.score}
                                </Text>
                                <Text style={{ ...RecordStyles.recordNumberText, ...RecordStyles.recordText, color: this.props.colortheme.textColor }}>
                                    {record.highestTile}
                                </Text>
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    colortheme: state.colortheme,
    records: state.records,
});

export default connect(mapStateToProps)(Screen);
