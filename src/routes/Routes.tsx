import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { themes } from '../global/themes';
import { MainRoutes } from './app.routes';

// import { Container } from './styles';

const Routes: React.FC = () => {
    return (
        <NavigationContainer theme={themes.dark}>
            <MainRoutes/>
        </NavigationContainer>
    );
}

export default Routes;