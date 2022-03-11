import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableWithoutFeedback as TWF,
    Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { themes } from '../global/themes';

// import { Container } from './styles';
type Props = {
    comment: string,
    editMode: boolean,
}

const AddComment: React.FC = () => {
    const [comment, setComment] = useState<string>('')
    const [editMode, setEditMode] = useState<boolean>(false)

    const handleAddComment = () => {
        Alert.alert('adicionado', comment)
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
                    <Icon name='times' size={15} color='#555' />
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
        <View style={{flex: 1}}>
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
    },
    input: {
        width: '90%'
    },
    caption: {
        marginLeft: 10,
        fontSize: 12,
        color: '#ccc'
    },
})

export default AddComment;