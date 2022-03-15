import React from 'react';
import Feed from '../screens/Feed';
import Profile from '../screens/Profile';
import { themes } from '../global/themes';
import AddPhoto from '../screens/AddPhoto';
import Icon from 'react-native-vector-icons/FontAwesome'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const BottonNavigation = createMaterialBottomTabNavigator();
const { Navigator, Screen } = BottonNavigation;

export const MainRoutes: React.FC = () => {
    return (
        <Navigator labeled={false} initialRouteName="Feed"
            barStyle={{ backgroundColor: themes.dark.colors.background }}
        >
            <Screen
                options={{ tabBarIcon: ({ color }) => <Icon name="home" color={color} size={26} /> }}
                name="Feed" component={Feed} />
            <Screen 
                options={{ tabBarIcon: ({ color }) => <Icon name="camera" color={color} size={26} /> }}
                name="AddPhoto" component={AddPhoto} />
            <Screen
                options={{ tabBarIcon: ({ color }) => <Icon name="user" color={color} size={26} /> }}
                name="profile" component={Profile} />
        </Navigator>
    );
}

