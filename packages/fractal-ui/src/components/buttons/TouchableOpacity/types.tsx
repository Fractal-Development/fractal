import { AnimationContent, AnimationProps, FractalSharedStyleProps } from '../../../sharedProps';
import { ReactNode } from 'react';

export interface TouchableOpacityProps extends FractalSharedStyleProps, AnimationProps {
    children?: ReactNode | Array<ReactNode>;
    style?: any;
    onPress?: () => void;
    onLongPress?: () => void;
    whileHover?: AnimationContent;
    whileTap?: AnimationContent;
    onPressIn?: () => void;
    onPressOut?: () => void;
}
