import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import Input from '../components/Input';
import { fonts } from '../global/fonts';
import { themes } from '../global/themes';
import { useAppDispatch } from '../hooks/redux';
import CustomButton from '../components/CustomButton';
import { RootStackParamList } from '../global/types';
import { login } from '../storage/ducks/user/userSlice'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// import { Container } from './styles';
type Props = NativeStackScreenProps<RootStackParamList, 'Signup'>

const Login: React.FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const name = 'temporario'
    const dispatch = useAppDispatch();

    const handleLogin = () => {
        dispatch(login({data:{name: name,email: email}}))
    }
    const handleSignup = () => {
        navigation.navigate('Signup');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Instagram</Text>
            <Input
                autoFocus
                value={email}
                placeholder='Email'
                //style={styles.input}
                keyboardType='email-address'
                setValue={setEmail}
            />
            <Input
                placeholder='Password'
                secureTextEntry
                value={password}
                //style={styles.input}
                setValue={setPassword}
            />
            <CustomButton label='Login' onPress={handleLogin} />
            <CustomButton label='Signup' onPress={handleSignup} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: fonts.main,
        //fontWeight: 'bold',
        fontSize: 60,
        color: themes.dark.colors.primary,
    },
})

export default Login;