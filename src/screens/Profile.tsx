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
import { useAppDispatch } from '../hooks/redux';
import { useAppSelector } from '../hooks/redux';
import { logout } from '../storage/ducks/user/userSlice';

// import { Container } from './styles';

const Profile: React.FC = () => {
    const [visible, setVisible] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    //const user = useAppSelector(state => state.user)
    const user ={
        name: 'Thyago',
        nickname: "npx.msc",
        email: "kzkr.thyago@gmail.com",
        description: `幸せ\nprintf("君の知らない物語");\nComputer Engineer\nGithub: ThyagoFRTS`,
    }


    const options = { email: user.email, secure: true }

    const handleLogout = () => {
        dispatch(logout())
    }
    const openModal = () => { setVisible(true) }
    const closeModal = () => { setVisible(false) }
    return (
        <View style={styles.container}>
            <ProfileHeader nickname={user.nickname} openModal={openModal} />
            <UserResume
                userName={user.name}
                description={user.description} />
            <Gravatar options={options} style={styles.avatar} />
            <Text style={styles.nickname}>Fulano of tal</Text>
            <Text style={styles.email}>eu@gmail.com</Text>
            <TouchableOpacity onPress={handleLogout} style={styles.button}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
            <ModalView visible={visible} closeModal={closeModal}>
                <ModalContent />
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