import React from 'react';
import {
    View,
    TextInput,
    TextInputProps,
    StyleSheet,
} from 'react-native';
import { themes } from '../global/themes';

// import { Container } from './styles';
type Props = TextInputProps & {
    setValue: (value: string) => void,
    value: string,
    overStyle?: any | null,
}
const TextArea: React.FC<Props> = ({ value, setValue, overStyle, ...rest }) => {
    return (
        <TextInput
            {...rest}
            multiline
            numberOfLines={5}
            maxLength={100}
            value={value? value: undefined}
            //placeholder='Email'
            style={styles.input}
            //keyboardType='email-address'
            onChangeText={value => setValue(value)}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        width: '90%',
        marginTop: 20,
        color: themes.dark.colors.primary,
        backgroundColor: themes.dark.colors.input,
        height: 95,
        opacity: 0.9,
        borderRadius: 8,
        fontSize: 13,
        marginRight: 4,
        paddingTop: 16,
        paddingHorizontal: 16,
        textAlignVertical: 'top',
    },
})

export default TextArea;