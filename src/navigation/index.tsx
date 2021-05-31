import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';

import Main from '../screens/main';
import Records from '../screens/records';

const Root = createStackNavigator();

class AppNav extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <StatusBar backgroundColor={'#0E0E0E'} />
                <Root.Navigator screenOptions={{ headerShown: false }}>
                    <Root.Screen component={Main} name='Main' />
                    <Root.Screen component={Records} name='Records' />
                </Root.Navigator>
            </NavigationContainer>
        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(AppNav);
