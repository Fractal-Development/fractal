import { ReactNode } from 'react';
import { FractalSharedAnimationProps, AnimationProps, FractalSharedStyleProps } from '../../../../sharedProps';

export interface PressableProps extends FractalSharedStyleProps, AnimationProps {
    children?: ReactNode | Array<ReactNode>;
    style?: any;
    onPress?: () => void;
    whileHover?: FractalSharedAnimationProps;
    whileTap?: FractalSharedAnimationProps;
    onPressIn?: () => void;
    onPressOut?: () => void;
}
