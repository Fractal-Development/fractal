import { ReactNode } from 'react';
import { AnimationProps } from '../../../sharedProps/AnimationProps';
import { FractalSharedProps } from '../../../sharedProps/FractalSharedProps';
export interface LayerProps extends FractalSharedProps, AnimationProps {
    children?: ReactNode | Array<ReactNode>;
    style?: any;
    onLayout?: (event: any) => void;
}
