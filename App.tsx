/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
    StatusBar,
    useColorScheme,
    View,
} from 'react-native';
import 'react-native-gesture-handler';
import Routes from './src/routes/Routes';



const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />  
            <Routes />
        </>
    );
};


export default App;
