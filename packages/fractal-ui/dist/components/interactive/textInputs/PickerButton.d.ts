import React from 'react';
import { TextFieldButtonProps } from './TextFieldButton';
export interface PickerButtonProps extends Omit<TextFieldButtonProps, 'rightImage'> {
    rightImage?: (color: string, size: number) => JSX.Element;
}
declare const PickerButton: React.ForwardRefExoticComponent<PickerButtonProps & React.RefAttributes<unknown>>;
export { PickerButton };
