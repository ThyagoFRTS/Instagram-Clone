import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity } from 'react-native';
import { themes } from '../../global/themes';

// import { Container } from './styles';
type Props = {
    logout?: () => void;
}
const ModalContent: React.FC<Props> = ({logout}) => {
    return (
        <View>
            <TouchableOpacity onPress={logout} style={styles.button}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        marginTop: 30,
        padding: 20,
        backgroundColor: '#4286f4'
    },
    buttonText: {
        fontSize: 20,
        color: themes.dark.colors.primary,
    },
})

export default ModalContent;