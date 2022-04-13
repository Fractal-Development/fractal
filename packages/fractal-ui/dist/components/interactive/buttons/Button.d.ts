import React, { ReactNode } from 'react';
import { AnimationProps, FractalSharedStyleProps } from '../../../sharedProps';
import { ButtonVariant } from './types';
export interface ButtonProps extends FractalSharedStyleProps, AnimationProps {
    style?: any;
    variant?: ButtonVariant;
    text?: string;
    addShadow?: boolean;
    pressedBackgroundColor?: string;
    children?: ReactNode | Array<ReactNode> | ((color: string) => ReactNode | Array<ReactNode>);
    onPress?: () => void;
    reduceColor?: boolean;
    ariaLabel?: string;
    disabled?: boolean;
    loading?: boolean;
    activityIndicatorColor?: string;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<unknown>>;
export { Button };
