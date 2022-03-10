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
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Post from './src/components/Post';
import Header from './src/components/Header';
import { themes } from './src/global/themes';
import { NavigationContainer } from '@react-navigation/native';
import Background from './src/components/Background';
import Routes from './src/routes/Routes';



const App = () => {
    const isDarkMode = useColorScheme() === 'dark';



    return (

        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            
                <Routes/>
            

        </SafeAreaView>

    );
};


export default App;
