import React, { ReactNode } from 'react';
import { AnimationProps, FractalSharedProps } from '../../sharedProps';
import { ButtonVariant } from './types/ButtonVariant';
export interface ButtonProps extends FractalSharedProps, AnimationProps {
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
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<unknown>>;
export { Button };
