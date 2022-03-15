import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { themes } from '../global/themes';
import { Gravatar } from 'react-native-gravatar'
import UserResume from '../components/Profile/UserResume';
import ProfileHeader from '../components/Profile/ProfileHeader';
import ModalView from '../components/ModalView';
import ModalContent from '../components/Profile/ModalContent';

// import { Container } from './styles';

const Profile: React.FC = () => {
    const [visible, setVisible] = useState<boolean>(false)
    const options = { email: 'eu@gmail.com', secure: true }
    const user = {
        nickname: 'npx.msc',
        description: `幸せ\nprintf("君の知らない物語");\nComputer Engineer\nGithub: ThyagoFRTS`,
    }
    const logout = () => { }
    const openModal = () => { setVisible(true) }
    const closeModal = () => { setVisible(false) }
    return (
        <View style={styles.container}>
            <ProfileHeader nickname={user.nickname} openModal={openModal}/>
            <UserResume
                userName={'Thyago Rodrigues'}
                description={user.description} />
            <Gravatar options={options} style={styles.avatar} />
            <Text style={styles.nickname}>Fulano of tal</Text>
            <Text style={styles.email}>eu@gmail.com</Text>
            <TouchableOpacity onPress={logout} style={styles.button}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
            <ModalView visible={visible} closeModal={closeModal}>
                <ModalContent/>
            </ModalView>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 100,
    },
    nickname: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold',
    },
    email: {
        marginTop: 20,
        fontSize: 25,
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

export default Profile;