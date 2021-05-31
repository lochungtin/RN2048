import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import { darktheme } from '../data/color';
import { RecordStyles, ScreenStyles } from './styles';

import { keygen } from '../utils/keygen';
import { RecordType } from '../utils/types';

interface NavProps {
    navigation: StackNavigationProp<any, any>,
}

interface ReduxProps {
    records: Array<RecordType>
}

class Screen extends React.Component<NavProps & ReduxProps> {
    render() {
        return (
            <View style={{ ...ScreenStyles.screen, backgroundColor: darktheme.bgColor }}>
                <View style={RecordStyles.topBar}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}>
                        <Icon color={darktheme.textColor} name='chevron-left' size={40} />
                    </TouchableOpacity>
                    <Text style={{...RecordStyles.titleText, color: darktheme.accentColor}}>
                        M Y   R E C O R D S
                    </Text>
                </View>
                <View key={keygen()} style={RecordStyles.recordBar}>
                    <Text style={{ ...RecordStyles.recordRankText, ...RecordStyles.recordText, color: darktheme.accentColor }}>
                        Rank
                    </Text>
                    <Text style={{ ...RecordStyles.recordNumberText, ...RecordStyles.recordText, color: darktheme.textColor }}>
                        Score
                    </Text>
                    <Text style={{ ...RecordStyles.recordNumberText, ...RecordStyles.recordText, color: darktheme.textColor }}>
                        Highest Tile
                    </Text>
                </View>
                <View style={{ ...RecordStyles.separatorLine, backgroundColor: darktheme.textboxColor }} />
                <ScrollView>
                    {this.props.records.map((record, index) => {
                        return (
                            <View key={keygen()} style={RecordStyles.recordBar}>
                                <Text style={{ ...RecordStyles.recordRankText, ...RecordStyles.recordText, color: darktheme.accentColor }}>
                                    {index}.
                                </Text>
                                <Text style={{ ...RecordStyles.recordNumberText, ...RecordStyles.recordText, color: darktheme.textColor }}>
                                    {record.score}
                                </Text>
                                <Text style={{ ...RecordStyles.recordNumberText, ...RecordStyles.recordText, color: darktheme.textColor }}>
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
    records: state.records
});

export default connect(mapStateToProps)(Screen);
