import { FractalSharedAnimationProps, AnimationProps, FractalSharedStyleProps } from '../../../sharedProps';
import { ReactNode } from 'react';

export interface PressableProps extends FractalSharedStyleProps, AnimationProps {
    children?: ReactNode | Array<ReactNode>;
    style?: any;
    onPress?: () => void;
    whileHover?: FractalSharedAnimationProps;
    whileTap?: FractalSharedAnimationProps;
    onPressIn?: () => void;
    onPressOut?: () => void;
}
