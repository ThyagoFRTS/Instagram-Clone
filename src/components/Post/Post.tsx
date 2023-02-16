import React from 'react';
import {
	View,
	Image,
	StyleSheet,
	Dimensions,
	ImageSourcePropType,
} from 'react-native';
import Author from './Author';
import Comments from './Comments';
import ActionBar from './ActionBar';
import AddComment from './AddComment';
import { CommentProps } from '../../global/types';

type Props = {
    id: number,
    imageUrl: string;
    email: string,
    nickname: string,
    comments?: Array<CommentProps>| null; 
}

const Post: React.FC<Props> = ({imageUrl, comments, email, nickname, id}) => {
	return (
		<View style={styles.container}>
            <Author email={email} nickname={nickname}/>
			<Image source={{uri: imageUrl}} style={styles.image}/>
            <ActionBar/>
            <Comments comments={comments}/>
            <AddComment itemId={id}/>
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