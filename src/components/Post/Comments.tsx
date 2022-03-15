import React from 'react';
import Comment from './Comment';
import { CommentProps } from '../../global/types';
import { View, StyleSheet, Text } from 'react-native';

// import { Container } from './styles';
type Props = {
	comments? : Array<CommentProps> | null,
}
const Comments: React.FC<Props> = ({comments}) => {
	let view = null;

	if (comments){
		view = comments.map((item, index) => {
			return(
				<Comment key={index} nickname={item.nickname} comment={item.comment}/>			
			)
		})
	}
	return (
		<View style={styles.container}>
			{view}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 10,
	},
})

export default Comments;