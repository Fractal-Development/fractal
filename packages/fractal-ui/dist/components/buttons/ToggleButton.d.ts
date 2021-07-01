import React, { ReactNode } from 'react';
import { AnimationProps, FractalSharedProps } from '../../sharedProps';
import { ButtonVariant } from './types/ButtonVariant';
export interface ToggleButtonProps extends FractalSharedProps, AnimationProps {
    variant: ButtonVariant;
    active?: boolean;
    useGrayVariant?: boolean;
    children?: (color: string) => ReactNode | Array<ReactNode>;
    style?: any;
    onPress?: () => void;
    onActiveChange?: (active: boolean) => void;
    disabled?: boolean;
}
declare const ToggleButton: React.ForwardRefExoticComponent<ToggleButtonProps & React.RefAttributes<unknown>>;
export { ToggleButton };
