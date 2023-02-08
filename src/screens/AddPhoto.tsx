import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert,
} from 'react-native';
import InputArea from '../components/InputArea';
import CustomButton from '../components/CustomButton'
import { MediaType } from 'react-native-image-picker'
import { launchImageLibrary } from 'react-native-image-picker';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { addPost, savePostOnDatabase } from '../storage/ducks/posts/postsSlicer'
//import { MaterialBottomTabScreenProps } from '@react-navigation/material-bottom-tabs';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootBottomParamList } from '../global/types';
import { useNavigation } from '@react-navigation/native';
// import { Container } from './styles';

type FeedRoute = BottomTabScreenProps<RootBottomParamList, 'AddPhoto'>

type Props = {
    uri: string,
}


const AddPhoto: React.FC<FeedRoute> = ({navigation}) => {
    const [image, setImage] = useState<Props>({} as Props)
    const [comment, setComment] = useState<string>('')
    const user = useAppSelector(state => state.user.data)
    const dispatch = useAppDispatch();

    const navig = useNavigation()

    const options = {
        mediaType: 'photo' as MediaType,
        maxWidth: 800,
        maxHeight: 600,
        //includeBase64: true,
    }

    const pick = () => {
        launchImageLibrary(options).then ((response) => {
            if (!response.didCancel) {
                const data = response.assets
                if (data) {
                    try {
                        const img = data[0]!
                        setImage({ uri: img.uri! })
                    } catch (error) {
                        Alert.alert("Failed to load", "Unable to load this picture")
                    }
                }
            }
        })
    }

    const save = () => {
        const post = {
            id: Math.random(),
            nickname: user!.nickname!,
            email: user!.email,
            imageUrl: image!,
            comments: comment? [{ nickname: user!.nickname!, comment: comment }] : []
            
        }
        //savePostOnDatabase(post)
        dispatch(addPost(post))
        setImage({} as Props)
        setComment('')
        navigation.navigate('Feed')
        //navig.navigate('Feed')

    }


    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Share Image</Text>
                <CustomButton label='Choose a picture' onPress={pick} />
                <View style={styles.imageConatiner}>
                    {image.uri ?
                        <Image source={image!} style={styles.image} />
                        :
                        <View style={styles.image}/>
                    }
                </View>
                <InputArea
                    placeholder='Comment'
                    value={comment}
                    setValue={setComment}
                />
                <CustomButton label='Save' onPress={save} />

            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    },
    imageConatiner: {
        width: '90%',
        height: Dimensions.get('window').width * 3 / 4,
        backgroundColor: '#111',
        marginTop: 20,
        borderRadius: 12,
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'center',
    },
    input: {
        marginTop: 20,
        width: '90%',
    },

})

export default AddPhoto;