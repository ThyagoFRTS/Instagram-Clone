import React from 'react';
import { View, TextInput, TextInputProps, StyleSheet, StyleProp } from 'react-native';
import { themes } from '../global/themes';

// import { Container } from './styles';
type Props = TextInputProps & {
    setValue: (value: string) => void,
    value: string,
    overStyle?: any | null,
}
const Input: React.FC<Props> = ({ value, setValue, overStyle, ...rest }) => {
    return (
        <TextInput
            {...rest}
            value={value}
            //placeholder='Email'
            style={[styles.input, overStyle]}
            //keyboardType='email-address'
            onChangeText={value => setValue(value)}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        width: '90%',
        height: 50,
        paddingLeft: 20,
        marginTop: 20,
        borderRadius: 5,
        color: themes.dark.colors.primary,
        backgroundColor: themes.dark.colors.input,
    },
})

export default Input;