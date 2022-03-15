import React from 'react';
import { View, StyleSheet } from 'react-native';
import { themes } from '../../global/themes';
import IonIcon from 'react-native-vector-icons/Ionicons'
import MaterialCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
// import { Container } from './styles';

const ActionBar: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                
                <View style={styles.iconContainer}>
                    <IonIcon name='md-heart-outline' size={24}
                        color={themes.dark.colors.primary}
                        style={styles.icon} />
                    <IonIcon name='chatbubble-outline' size={24}
                        color={themes.dark.colors.primary}
                        style={styles.icon} />
                    <IonIcon name='paper-plane-outline' size={24}
                        color={themes.dark.colors.primary}
                        style={styles.icon} />
                    
                </View>
                <MaterialCIcon name='bookmark-outline' size={24}
                        color={themes.dark.colors.primary}
                        style={styles.icon} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: '100%'
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    iconContainer: {
        flexDirection: 'row',
    },
    icon: {
        marginHorizontal: 10,
    }
})

export default ActionBar;