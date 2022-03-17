import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, {useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import AuthButton from '../components/AuthButton';
import Input from '../components/Input';
import { fonts } from '../global/fonts';
import { themes } from '../global/themes';
import { RootStackParamList } from '../global/types';

// import { Container } from './styles';
type Props = NativeStackScreenProps<RootStackParamList,'Login'>

const Signup: React.FC<Props> = ({navigation}) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [name, setName] = useState<string>('')

    const save = () => {}
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Instagram</Text>
            <Input
                autoFocus
                placeholder='Name'
                value={name}
                //style={styles.input}
                setValue={setName}
            />
            <Input
                
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
            <AuthButton label='Save' onPress={save}/>
            <AuthButton label='Cancel' onPress={() => {navigation.goBack()}}/>
            

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
    },
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

export default Signup;