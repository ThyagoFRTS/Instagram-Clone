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
    positionEnd?: boolean; 
    closeModal: () => void;
}
// import { Container } from './styles';

const ModalView: React.FC<Props> = ({ children,positionEnd=false, closeModal, ...rest }) => {
    return (
        <Modal
            transparent
            animationType='slide'
            statusBarTranslucent
            {...rest}>
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={[styles.overlay, positionEnd && {justifyContent: "flex-end"}]} >
                    {children}
                </View>
            </TouchableWithoutFeedback>

        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: themes.dark.colors.overlay,
    },
});

export default ModalView;
