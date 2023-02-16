import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { themes } from '../../global/themes';

// import { Container } from './styles';
type Props = {
    logout?: () => void;
}
const ModalContent: React.FC<Props> = ({ logout }) => {
    return (
        <View>
            <View style={styles.bar} />
            <View style={styles.smallContainer}>
                <TouchableOpacity onPress={logout} style={styles.button}>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        marginTop: 30,
        padding: 20,
        backgroundColor: '#4286f4'
    },
    buttonText: {
        fontSize: 20,
        color: themes.dark.colors.primary,
    },
    smallContainer: {
        backgroundColor: themes.dark.colors.background,
    },
    bar: {
        width: 24,
        height: 2,
        borderRadius: 2,
        backgroundColor: themes.dark.colors.primary,
        alignSelf: "center",

    }
})

export default ModalContent;