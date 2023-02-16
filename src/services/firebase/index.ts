import { getBlobFromUri } from './../../utils/handleBinaries';
import { Buffer } from "buffer";
import { app, realtimeDatabase, storageDatabase } from "./firebase-config";
import {
    getDatabase,
    set,
    ref as realtimeRef,
    push
} from "firebase/database";
import {
    ref as storageRef,
    uploadString,
    uploadBytes
} from 'firebase/storage'
import { PostProps, PostsProps } from "../../global/types";

export const uploadImage = async (uri: string) => {
    const mainNode = storageRef(storageDatabase, 'images')
    const filename = uri.substring(uri.lastIndexOf('/') + 1);

    const fileRef = storageRef(mainNode, filename)

    const blob = await getBlobFromUri(uri);

    const url_options = "alt=media"
    const firebase_url = "https://firebasestorage.googleapis.com/v0/b"
    /**
     https://firebasestorage.googleapis.com/v0/b
     /instagramclone-306f1.appspot.com
     /o
     /images
     %2F{image.*}?alt=media&token=some_token
     */

    let response = await uploadBytes(fileRef, blob).then((snapshot) => {
        const { bucket, name } = snapshot.metadata 
        let url = `${firebase_url}/${bucket}/o/images%2F${name}?${url_options}`
        //console.log(url)
        if (snapshot) {
            return url
        } else {
            return null
        }
    })
    return response
}

export const savePostOnDatabase = async (post: PostProps) => {
    const node = realtimeRef(realtimeDatabase, 'posts')

    console.log(post.imageUrl)
    let image_url = await uploadImage(post.imageUrl)
    console.log(image_url)
    
    let postRef = await push(node, post).then((response) => {
        console.log("-------index firebase---------")
        console.log(response)
        return response
    }).catch (err => console.log(err))
    if (postRef){
        return post
    } else {
        return null
    }
}




