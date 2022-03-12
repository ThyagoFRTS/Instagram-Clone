import React from 'react';
import {
	View,
	StyleSheet,
	Image,
	ImageSourcePropType,
	Dimensions
} from 'react-native';
import { CommentProps } from '../global/types';
import AddComment from './AddComment';
import Author from './Author';
import Comments from './Comments';

type Props = {
    imageUrl: ImageSourcePropType;
    email: string,
    nickname: string,
    comments?: Array<CommentProps>| null; 
}

const Post: React.FC<Props> = ({imageUrl, comments, email, nickname}) => {
	return (
		<View style={styles.container}>
            <Author email={email} nickname={nickname}/>
			<Image source={imageUrl} style={styles.image}/>
            <Comments comments={comments}/>
            <AddComment/>
		</View>
	);
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
	},
	image:{
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').width,
		resizeMode: 'cover',
	}
})

export default Post;