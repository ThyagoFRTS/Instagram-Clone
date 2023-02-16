import React, { ReactNode } from 'react';
import { View, ModalProps, ActivityIndicator } from 'react-native';
import ModalView from './ModalView';

// import { Container } from './styles';
type Props = ModalProps & {
    children?: ReactNode;
    positionEnd?: boolean;
    closeModal: () => void;
}

const LoadingModal: React.FC<Props> = ({ children ,closeModal, ...rest }) => {
    return <ModalView closeModal={closeModal} {...rest}>
        <ActivityIndicator size="large"/>
    </ModalView>;
}

export default LoadingModal;