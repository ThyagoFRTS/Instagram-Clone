import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { themes } from '../global/themes';
import { Gravatar } from 'react-native-gravatar';

// import { Container } from './styles';
type Props = {
    email: string,
    nickname: string,
}

const Author: React.FC<Props> = ({ email, nickname }) => {
    return (
        <View style={styles.container}>
            
			<Gravatar options={{ email: email, secure: true }}
				style={styles.avatar} />
    
            <Text style={styles.nickname}>{nickname}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginHorizontal: 10,
    },
    nickname: {
        color: themes.dark.primary,
        marginVertical: 10,
        fontSize: 15,
        fontWeight: 'bold',
    },
})

export default Author;