import React from 'react';
import {
    View
} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Feed from '../screens/Feed';
import Icon from 'react-native-vector-icons/FontAwesome'

const BottonNavigation = createMaterialBottomTabNavigator();
const { Navigator, Screen } = BottonNavigation;

export const AppRoutes: React.FC = () => {
    return (
        <Navigator labeled={false}>
            <Screen
                options={{
                    tabBarIcon: ({ color }) => <Icon name="home" color={color} size={26} />,
                }}
                name="Feed" component={Feed} />
            <Screen name="camera" component={Feed} />

            <Screen name="profile" component={Feed} />
        </Navigator>
    );
}

