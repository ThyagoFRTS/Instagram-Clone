import React, { useState } from 'react';
import {
    View,
    Text,
    Alert,
    TextInput,
    StyleSheet,
    TouchableWithoutFeedback as TWF,
} from 'react-native';
import { themes } from '../../global/themes';
import Icon from 'react-native-vector-icons/FontAwesome';
import { addComment } from '../../storage/ducks/posts/postsSlicer';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
// import { Container } from './styles';
type Props = {
    itemId: number,
}

const AddComment: React.FC<Props> = ({ itemId }) => {
    const [comment, setComment] = useState<string>('')
    const [editMode, setEditMode] = useState<boolean>(false)
    const nickname = useAppSelector(state => state.user.data?.nickname!)
    const dispatch = useAppDispatch()

    const handleAddComment = () => {
        dispatch(addComment({itemId: itemId, comment: {nickname: nickname, comment: comment}}))
        setComment('')
        setEditMode(false)
    }

    let commentArea = null;

    if (editMode) {
        commentArea = (
            <View style={styles.container}>
                <TextInput
                    placeholder='Add a comment'
                    style={styles.input}
                    value={comment}
                    onChangeText={(comment) => setComment(comment)}
                    onSubmitEditing={handleAddComment}
                    autoFocus />
                <TWF onPress={() => setEditMode(false)}>
                    <Icon name='times' size={15} color='#555' style={styles.icon}/>
                </TWF>
            </View>
        )
    } else {
        commentArea = (
            <TWF onPress={() => setEditMode(true)}>
                <View style={styles.container}>
                    <Icon name='comment-o' size={25} color={themes.dark.colors.primary} />
                    <Text style={styles.caption}>Add a comment</Text>
                </View>
            </TWF>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            {commentArea}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        
        marginHorizontal: 10,


    },
    input: {
        width: '90%',
        //backgroundColor: "#fff",
        marginLeft: 10,
    },
    caption: {
        marginLeft: 10,
        fontSize: 12,
        color: '#ccc'
    },
    icon: {
        marginHorizontal: 8,
    }
})

export default AddComment;