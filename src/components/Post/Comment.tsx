import React, { Key } from 'react';
import { themes } from '../../global/themes';
import { CommentProps } from '../../global/types';
import { View, Text, StyleSheet } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons'

// import { Container } from './styles';
type Props = CommentProps & {
    index?: Key | null;
}

const Comment: React.FC<Props> = ({ nickname, comment, index }) => {
    return (
        <View style={styles.container} key={index} >
            <View style={styles.textConatiner}>
                <Text style={styles.nickname}>{nickname}: </Text>
                <Text style={styles.comment}>{comment}</Text>
            </View>
            <IonIcon name='md-heart-outline' size={11}
                        color={themes.dark.colors.primary}
                        style={styles.icon} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'space-between'
    },
    textConatiner: {
        flexDirection: 'row'
    },
    nickname: {
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#fff',
    },
    comment: {
        color: themes.dark.colors.comment,
    },
    icon: {
        
    }
})

export default Comment;