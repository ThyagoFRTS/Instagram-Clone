import React from 'react';
import {
    View,
    StyleSheet,
    Text,

} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome'
import FA5Icon from 'react-native-vector-icons/FontAwesome5'
import { themes } from '../../global/themes';

// import { Container } from './styles';
type Props = {
    nickname?: string | null,
    openModal: () => void,
}
const ProfileHeader: React.FC<Props> = ({nickname, openModal}) => {
    
    return (
        <View style={styles.container}>
            <Text style={styles.nickname}>{nickname}</Text>
            <View style={styles.iconContainer}>
                    <FAIcon name='plus-square-o' size={24}
                        color={themes.dark.colors.primary}
                        style={styles.icon} />
                    <FA5Icon name='bars' size={24}
                        onPress={openModal}
                        color={themes.dark.colors.primary}
                        style={styles.icon} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginVertical: 10,
        alignItems: 'center',
        width: '100%'
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        marginHorizontal: 12,
    },
    nickname: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingLeft: 10,
        color: themes.dark.colors.primary,
    },
    
})

export default ProfileHeader;