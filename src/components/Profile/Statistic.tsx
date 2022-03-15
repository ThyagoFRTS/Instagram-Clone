import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { themes } from '../../global/themes';

// import { Container } from './styles';
type Props = {
    number: number,
    label: string,
}
const Statistic: React.FC<Props> = ({label, number}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.display}>{number}</Text>
            <Text style={styles.label}>{label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    display: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 4,
        color: themes.dark.colors.primary,
    },
    label: {
        color: themes.dark.colors.comment
    },
})

export default Statistic;