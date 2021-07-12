import { LayerProps } from '../../../layout';
export interface ModalProps extends LayerProps {
    visible?: boolean;
    onDismiss?: () => void;
}
