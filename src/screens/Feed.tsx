import React, { Key, useState } from "react";
import {
    StyleSheet,
    FlatList,
    View,
    ImageSourcePropType,
    ScrollView
} from 'react-native'
import Header from "../components/MainHeader";
import ModalView from "../components/ModalView";

import Post from "../components/Post/Post";
import { CommentProps } from "../global/types";
import { useAppSelector } from "../hooks/redux";


// import { Container } from './styles';
type Props = {
    id: Key,
    email: string,
    imageUrl: ImageSourcePropType,
    nickname: string,
    comments: CommentProps[],
}

const Feed = () => {
    const posts = useAppSelector(state => state.posts.posts)
    
    return (
        <View style={styles.container}>
            <Header/>
            <FlatList
                data={posts}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => <Post key={item.id} {...item}/>}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

})

export default Feed;
