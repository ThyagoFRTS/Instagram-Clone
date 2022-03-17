import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import AuthButton from '../components/AuthButton';
import Input from '../components/Input';
import { fonts } from '../global/fonts';
import { themes } from '../global/themes';
import { RootStackParamList } from '../global/types';

// import { Container } from './styles';
type Props = NativeStackScreenProps<RootStackParamList,'Signup'>

const Login: React.FC<Props> = ( {navigation} ) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    
    const login = () => { }
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
            <AuthButton label='Login' onPress={login}/>
            <AuthButton label='Signup' onPress={handleSignup}/>
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