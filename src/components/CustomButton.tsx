import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { themes } from '../global/themes';

// import { Container } from './styles';
type Props = TouchableOpacityProps & {
    label: string,
}

const Button: React.FC<Props> = ({ label, ...rest }) => {
    return (
        <TouchableOpacity {...rest} style={styles.button}>
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 5,
        backgroundColor: themes.dark.colors.button,
    },
    buttonText: {
        fontSize: 15,
        color: themes.dark.colors.primary,
    }
})
export default Button;