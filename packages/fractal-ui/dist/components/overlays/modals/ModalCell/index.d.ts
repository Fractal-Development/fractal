import { LayerProps } from '../../../layout/Layer/types';
export interface ModalCellProps extends LayerProps {
    variant: 'bottom' | 'middle';
}
export declare function ModalCell({ variant, ...others }: ModalCellProps): JSX.Element;