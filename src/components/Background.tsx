import React from 'react';
import { View, StyleSheet } from 'react-native';
import { themes } from '../global/themes';

// import { Container } from './styles';
type Props = {
    children: React.ReactNode
}


const Background: React.FC<Props> = ({children}) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themes.dark.background,
    }
});

export default Background;