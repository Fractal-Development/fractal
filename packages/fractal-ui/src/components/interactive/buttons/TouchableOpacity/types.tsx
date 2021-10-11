import { ReactNode } from 'react';
import { FractalSharedAnimationProps, AnimationProps, FractalSharedStyleProps } from '../../../../sharedProps';

export interface TouchableOpacityProps extends FractalSharedStyleProps, AnimationProps {
    children?: ReactNode | Array<ReactNode>;
    style?: any;
    onPress?: () => void;
    onLongPress?: () => void;
    whileHover?: FractalSharedAnimationProps;
    whileTap?: FractalSharedAnimationProps;
    onPressIn?: () => void;
    onPressOut?: () => void;
    disabled?: boolean;
}
