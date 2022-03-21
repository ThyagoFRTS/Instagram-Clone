import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    Platform
} from 'react-native'
import { fonts } from '../global/fonts'
import { themes } from '../global/themes'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { Gravatar } from 'react-native-gravatar'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useAppSelector } from '../hooks/redux'

// import { Container } from './styles';

const Header: React.FC = () => {
    const userEmail = useAppSelector(state => state.user.data!.email)
    
    const options = { email: userEmail, secure: true }

    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Text style={styles.title}>Instgram Clone</Text>
                <View style={styles.iconContainer}>
                    <FAIcon name='plus-square-o' size={24}
                        color={themes.dark.colors.primary}
                        style={styles.icon} />
                    <IonIcon name='md-heart-outline' size={24}
                        color={themes.dark.colors.primary}
                        style={styles.icon} />
                    <MCIcon name='facebook-messenger' size={24}
                        color={themes.dark.colors.primary}
                        style={styles.icon} />
                    <Gravatar email={userEmail} options={options} style={[styles.icon,styles.avatar]}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS == 'ios' ? 10 : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: themes.dark.colors.primary,
        width: '100%'
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    iconContainer: {
        flexDirection: 'row',
    },
    icon: {
        marginHorizontal: 10,
    },
    title: {
        color: themes.dark.colors.primary,
        fontFamily: fonts.main,
        height: 30,
        fontSize: 28
    },
    avatar: {
        height: 24,
        width: 24,
        borderRadius: 12,
    }
})

export default Header;
