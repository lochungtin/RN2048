import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';

import Main from '../screens/main';
import Records from '../screens/records';

import { ColorSchemeType } from '../utils/types';

interface ReduxProps {
    colortheme: ColorSchemeType,
}

const Root = createStackNavigator();

class AppNav extends React.Component<ReduxProps> {
    render() {
        return (
            <NavigationContainer>
                <StatusBar backgroundColor={this.props.colortheme.bgColor} />
                <Root.Navigator screenOptions={{ headerShown: false }}>
                    <Root.Screen component={Main} name='Main' />
                    <Root.Screen component={Records} name='Records' />
                </Root.Navigator>
            </NavigationContainer>
        );
    }
}

const mapStateToProps = state => ({
    colortheme: state.colortheme,
});

export default connect(mapStateToProps)(AppNav);
