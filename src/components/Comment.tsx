import React, { Key } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { themes } from '../global/themes';
import { CommentProps } from '../global/types';

// import { Container } from './styles';
type Props = CommentProps & {
    index?: Key | null;
}

const Comment: React.FC<Props> = ({nickname, comment, index}) => {
    return (
        <View style={styles.commentContainer} key={index} >
            <Text style={styles.nickname}>{nickname}: </Text>
            <Text style={styles.comment}>{comment}</Text>
        </View>
    );
}

const styles = StyleSheet.create({ 
	commentContainer: {
		flexDirection: 'row',
		marginTop: 5,
	},
	nickname: {
		marginLeft: 5,
		fontWeight: 'bold',
		color: '#fff',
	},
	comment: {
		color: themes.dark.colors.comment,
		
	},
})

export default Comment;