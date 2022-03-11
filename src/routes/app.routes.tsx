import React from 'react';
import {
    View
} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Feed from '../screens/Feed';
import Icon from 'react-native-vector-icons/FontAwesome'
import { themes } from '../global/themes';

const BottonNavigation = createMaterialBottomTabNavigator();
const { Navigator, Screen } = BottonNavigation;

export const MainRoutes: React.FC = () => {
    return (
        <Navigator labeled={false} initialRouteName="Feed"
            barStyle={{ backgroundColor: themes.dark.colors.background }}
        >
            <Screen 
                options={{ tabBarIcon: ({ color }) => <Icon name="camera" color={color} size={26} /> }}
                name="AddPhoto" component={Feed} />
            <Screen
                options={{ tabBarIcon: ({ color }) => <Icon name="home" color={color} size={26} /> }}
                name="Feed" component={Feed} />
            <Screen
                options={{ tabBarIcon: ({ color }) => <Icon name="user" color={color} size={26} /> }}
                name="profile" component={Feed} />
        </Navigator>
    );
}

