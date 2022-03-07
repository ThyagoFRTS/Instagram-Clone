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
    comments?: Array<CommentProps>| null; 
}

const Post: React.FC<Props> = ({imageUrl, comments}) => {
	return (
		<View style={styles.container}>
			<Image source={imageUrl} style={styles.image}/>
            <Author email="kzkr.thyago@gmail.com" nickname='npx.msc'/>
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
		height: Dimensions.get('window').width * 3/4,
		resizeMode: 'contain'
	}
})

export default Post;