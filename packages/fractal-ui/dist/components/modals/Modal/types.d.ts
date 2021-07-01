import { LayerProps } from '../../containers/Layer/types';
export interface ModalProps extends LayerProps {
    visible?: boolean;
    onDismiss?: () => void;
}
