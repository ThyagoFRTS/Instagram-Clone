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


const App = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const comments = [
        { nickname: "ana", comment: "legal fera"},
        { nickname: "miau", comment: "ffffff"}
    ]


    return (
        <SafeAreaView style={{backgroundColor: themes.dark.background, flex: 1}}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                >
                <View style={{flex: 1}}>
                    <Header />
                    <Post imageUrl={require('./assets/imgs/fence.jpg')} comments={comments}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


export default App;
