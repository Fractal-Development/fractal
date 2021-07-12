import React from 'react';
import { AnimationProps, FractalSharedStyleProps } from '../../../sharedProps';
import { TextProps } from '../../text';
import { ButtonVariant } from './types';
export interface TextButtonProps extends FractalSharedStyleProps, AnimationProps {
    variant: ButtonVariant;
    children?: string;
    textProps?: Omit<TextProps, 'children'>;
    leftIcon?: (color: string) => JSX.Element;
    rightIcon?: (color: string) => JSX.Element;
    style?: any;
    onPress?: () => void;
    disabled?: boolean;
}
declare const TextButton: React.ForwardRefExoticComponent<TextButtonProps & React.RefAttributes<unknown>>;
export { TextButton };
