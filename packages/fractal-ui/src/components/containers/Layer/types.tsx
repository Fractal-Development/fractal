import { AnimationProps, FractalSharedStyleProps } from '../../../sharedProps';
import { ReactNode, RefObject } from 'react';

export interface LayerProps extends FractalSharedStyleProps, AnimationProps {
    children?: ReactNode | Array<ReactNode>;
    style?: any;
    onLayout?: (event: any) => void;
    ref?: RefObject<any>;
}
