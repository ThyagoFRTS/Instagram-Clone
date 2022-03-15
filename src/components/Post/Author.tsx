import React from 'react';
import { themes } from '../../global/themes';
import { Gravatar } from 'react-native-gravatar';
import Icon from 'react-native-vector-icons/Ionicons'
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';
type Props = {
    email: string,
    nickname: string,
}

const Author: React.FC<Props> = ({ email, nickname }) => {
    return (
        <View style={styles.container}>
            <View style={styles.autor}>
                <Gravatar options={{ email: email, secure: true }}
                    style={styles.avatar} />
                <Text style={styles.nickname}>{nickname}</Text>
            </View>
            <Icon name='ellipsis-vertical-sharp' size={15}
                color={themes.dark.colors.primary}
                style={styles.icon} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginVertical: 8,
        marginHorizontal: 8,
    },
    nickname: {
        color: themes.dark.colors.primary,
        fontSize: 14,
        fontWeight: 'bold',
    },
    autor: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginHorizontal: 10,
    },
})

export default Author;