import { ReactNode, RefObject } from 'react';
import { AnimationProps } from '../../../sharedProps';

export interface LayerProps extends AnimationProps {
    className?: string;
    children?: ReactNode | ReactNode[];
    style?: any;
    onLayout?: (event: any) => void;
    ref?: RefObject<any>;
    layout?: boolean | 'position' | 'size';
}
