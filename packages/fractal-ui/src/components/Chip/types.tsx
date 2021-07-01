import { ReactNode } from 'react';
import { LayerProps } from '../containers/Layer/types';

export interface ChipProps extends LayerProps {
    text?: string;
    children?: ReactNode;
    onCrossButtonPress?: () => void;
}
