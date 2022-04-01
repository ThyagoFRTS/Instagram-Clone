import React from 'react';
import Feed from '../screens/Feed';
import Profile from '../screens/Profile';
import { themes } from '../global/themes';
import AddPhoto from '../screens/AddPhoto';
import Icon from 'react-native-vector-icons/FontAwesome'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import { RootBottomParamList, RootStackParamList } from '../global/types';
import { switchColor } from '../utils/colors';

const BottonNavigation = createBottomTabNavigator<RootBottomParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const { Navigator, Screen } = BottonNavigation;

export const MainRoutes: React.FC = () => {
    const barOptions = {
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: { backgroundColor: themes.dark.colors.background }

    }
    return (
        <Navigator initialRouteName="Feed"
            screenOptions={barOptions}
        >
            <Screen
                options={{ tabBarIcon: ({ focused }) => <Icon name="home" color={switchColor(focused)} size={26} /> }}
                name="Feed" component={Feed} />
            <Screen
                options={{ tabBarIcon: ({ focused }) => <Icon name="camera" color={switchColor(focused)} size={26} /> }}
                name="AddPhoto" component={AddPhoto} />
            <Screen
                options={{ tabBarIcon: ({ focused }) => <Icon name="user" color={switchColor(focused)} size={26} /> }}
                name="Profile" component={Profile} />
        </Navigator>
    );
}

export const AuthRoutes: React.FC = () => {
    const options = { headerShown: false }
    return (
        <Stack.Navigator screenOptions={options}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    );
}
