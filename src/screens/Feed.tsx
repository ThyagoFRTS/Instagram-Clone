import React, { Key, useState } from "react";
import {
    StyleSheet,
    FlatList,
    View,
    ImageSourcePropType,
    ScrollView
} from 'react-native'
import Header from "../components/MainHeader";

import Post from "../components/Post/Post";
import { CommentProps } from "../global/types";


// import { Container } from './styles';
type Props = {
    id: Key,
    email: string,
    imageUrl: ImageSourcePropType,
    nickname: string,
    comments: CommentProps[],
}

const Feed = () => {
    
    const [state, setState] = useState<Props[]>(
        [
            {
                id: Math.random(),
                nickname: 'npx.msc',
                email: 'miawu@gmail.com',
                imageUrl: require('../../assets/imgs/idk.jpg'),
                comments: [
                    {
                        nickname: 'mas é claro',
                        comment: "que o sol"
                    }, {
                        nickname: 'vai voltar amanha',
                        comment: 'mais uma vez, eu sei'
                    }]
            }, {
                id: Math.random(),
                nickname: 'knsm',
                email: 'sss@gmail.com',
                imageUrl: require('../../assets/imgs/ed1.jpg'),
                comments: [
                    {
                        nickname: 'tem gente que',
                        comment: "está do mesmo lado que vc"
                    }, {
                        nickname: 'mas deveria estar do lado',
                        comment: 'de la, tem gente que machuca os outros'
                    }]
            }

        ]
    )
    return (
        <View style={styles.container}>
            <Header/>
            <FlatList
                data={state}
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
