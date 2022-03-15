import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
} from 'react-native';
import { Gravatar } from 'react-native-gravatar'
import { themes } from '../../global/themes';
import Statistic from './Statistic';
// import { Container } from './styles';
type Props = {
    userName: string,
    description?: string,
    numPosts?: number,
    numFollowers?: number,
    following?: number,
}
const screenWidth = Dimensions.get('window').width;

const UserResume: React.FC<Props> = ({userName,description}) => {
    const options = { email: 'eu@gmail.com', secure: true }
    return (
        <View style={styles.container}>
            <View style={styles.userPit}>
                <Gravatar options={options} style={styles.avatar} />
                <View style={styles.statisticsContainer}>
                    <Statistic number={0} label={'Posts'} />
                    <Statistic number={91} label={'Followers'} />
                    <Statistic number={144} label={'Following'} />
                </View>
            </View>
            <Text style={styles.userName}>{userName}</Text>
            <Text style={styles.resume}>{description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        //marginHorizontal: 10,
    },
    userPit: {
        marginBottom: 10,
        marginLeft: 20,
        flexDirection: 'row'

    },
    statisticsContainer: {
        flex: 1,
        //backgroundColor: '#0f0',
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },
    userName: {
        marginLeft: 20,
        color: themes.dark.colors.primary,
    },
    resume: {
        marginLeft: 20,
        color: themes.dark.colors.primary,
    },
    avatar: {
        width: screenWidth / 5,
        height: screenWidth / 5,
        borderRadius: screenWidth / 10,
    },
})
export default UserResume;