import { AnimationContent, AnimationProps, FractalSharedProps } from '../../../sharedProps';
import { ReactNode } from 'react';

export interface TouchableOpacityProps extends FractalSharedProps, AnimationProps {
    children?: ReactNode | Array<ReactNode>;
    style?: any;
    onPress?: () => void;
    onLongPress?: () => void;
    whileHover?: AnimationContent;
    whileTap?: AnimationContent;
    onPressIn?: () => void;
    onPressOut?: () => void;
}
