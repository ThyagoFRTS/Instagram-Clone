import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { themes } from '../global/themes';
import { MainRoutes, AuthRoutes } from './app.routes';

// import { Container } from './styles';

const Routes: React.FC = () => {
    const user = false
    return (
        <NavigationContainer theme={themes.dark}>
            {user? <MainRoutes/> : <AuthRoutes/>}
        </NavigationContainer>
    );
}

export default Routes;