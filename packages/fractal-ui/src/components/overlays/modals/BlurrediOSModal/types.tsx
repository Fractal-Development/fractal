import { ReactNode } from 'react';
import { ModalProps } from '../Modal/types';

export interface BlurredModalProps extends ModalProps {
    onDismiss?: () => void;
    children?: ReactNode;
    disableStateResetOnDismiss?: boolean;
    dismissText: string;
}
