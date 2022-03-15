import React, { ReactNode } from 'react';
import {
    View,
    Modal,
    StyleSheet,
    ModalProps,
    TouchableWithoutFeedback,
} from 'react-native';
import { themes } from '../global/themes';

type Props = ModalProps & {
    children: ReactNode; 
    closeModal: () => void;
}
// import { Container } from './styles';

const ModalView: React.FC<Props> = ({ children, closeModal, ...rest }) => {
    return (
        <Modal
            transparent
            animationType='slide'
            statusBarTranslucent
            {...rest}>
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={styles.overlay} >
                <View style={styles.bar}/>
                    <View style={styles.smallContainer}>
                        {children}
                    </View>
                </View>
            </TouchableWithoutFeedback>

        </Modal>
    );
}

const styles = StyleSheet.create({
    smallContainer: {
        backgroundColor: themes.dark.colors.background,
        //justifyContent: "flex-end",

    },
    overlay: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: themes.dark.colors.overlay,
    },
    bar: {
        width:  24,
        height: 2,
        borderRadius: 2,
        backgroundColor: themes.dark.colors.primary,
        alignSelf: "center",
        
    }
});

export default ModalView;
