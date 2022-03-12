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
    PermissionsAndroid,
    ImageSourcePropType
} from 'react-native';
import { MediaType, Asset } from 'react-native-image-picker'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { themes } from '../global/themes';
// import { Container } from './styles';

type Props = {
    uri: string,
    base64: string,
}

type ImageInfo = {
    fileName: string;
    fileSize: number;
    height: number;
    type: string;
    uri: string;
    width: number;
    base64?: string;
};

const a = {
    "assets": [
        {
            "fileName": "rn_image_picker_lib_temp_e3e29fd3-f85b-4b81-a7b8-56852d63f380.jpg",
            "fileSize": 75754,
            "height": 519,
            "type": "image/jpeg",
            "uri": "file:///data/user/0/com.instagramclone/cache/rn_image_picker_lib_temp_e3e29fd3-f85b-4b81-a7b8-56852d63f380.jpg",
            "width": 736
        }
    ]
}

const AddPhoto: React.FC = () => {
    const [image, setImage] = useState<Props>({} as Props)
    const [comment, setComment] = useState<string>('')
    
    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "App Camera Permission",
                    message: "App needs access to your camera ",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("Camera permission given");
            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    }
    const options = {
        mediaType: 'photo' as MediaType,
        maxWidth: 800,
        maxHeight: 600,
        includeBase64: true,
        //includeExtra: true
    }

    const pickImage = async () => {
        const result = await launchImageLibrary(options)
        if (!result.didCancel) {
            const assets = result.assets
            const numItens = assets?.length
            console.log(result.assets)

        }

    }
    const pick = () => {
        launchImageLibrary(options, (response) => {
            if (!response.didCancel) {
                const data = response.assets
                if (data) {
                    try {
                        const img = data[0]!

                        setImage({ uri: img.uri!, base64: img.base64! })
                    } catch (error) {
                        Alert.alert("Failed to load", "Unable to load this picture")
                    }
                }
            }
        })
    }

    const save = async () => {
        Alert.alert("Your picture", comment)
    }


    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Share Image</Text>
                <View style={styles.imageConatiner}>
                    <Image source={image} style={styles.image} />
                </View>
                <TouchableOpacity onPress={pick} style={styles.button}>
                    <Text style={styles.buttonText}>Choose a picture</Text>
                </TouchableOpacity>
                <TextInput
                    placeholder='Comment'
                    style={styles.input}
                    value={comment}
                    onChangeText={comment => setComment(comment)}
                />
                <TouchableOpacity onPress={save} style={styles.button}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    imageConatiner: {
        width: '90%',
        height: Dimensions.get('window').width * 3/4,
        backgroundColor: '#EEE',
        marginTop: 10,
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: 'bold', 
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width * 3/4,
        resizeMode: 'center',
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttonText: {
        fontSize: 20,
        color: themes.dark.colors.primary
    },
    input: {
        marginTop: 20,
        width: '90%',
    },

})

export default AddPhoto;