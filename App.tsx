
import React from 'react';
import {
    StatusBar,
    useColorScheme,
} from 'react-native';
//import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import Routes from './src/routes/Routes';
import store from './src/storage';



const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <Provider store={store}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />  
            <Routes />
        </Provider>
    );
};


export default App;
