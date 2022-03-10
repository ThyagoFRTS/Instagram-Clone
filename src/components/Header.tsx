import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    Platform
} from 'react-native'
import { fonts } from '../global/fonts'
import { themes } from '../global/themes'
const icon = require('../../assets/imgs/icon.png')
// import { Container } from './styles';

const Header: React.FC = () => {
	return (
		<View style={styles.container}>
			<View style={styles.rowContainer}>
                <Image source={icon} style={styles.image} />
                <Text style={styles.title}>Instgram Clone</Text>
            </View>
		</View>
	);
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS == 'ios' ? 10 : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: themes.dark.primary,
        width: '100%'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    title: {
        color: '#fff',
        
        fontFamily: fonts.main,
        height: 30,
        fontSize: 28
    }
})

export default Header;
