import React from 'react';
import { TextFieldProps } from './BaseTextField/types';
import { LayerProps } from '../../layout';
export interface IconTextFieldProps extends Partial<Omit<LayerProps, 'children'>> {
    leftImage?: (color: string, size: number) => JSX.Element;
    rightImage?: (color: string, size: number) => JSX.Element;
    value?: string;
    onChangeText?: (text: string) => void;
    placeholder?: string;
    textFieldProps?: TextFieldProps;
    inputRef?: any;
}
declare const IconTextField: React.ForwardRefExoticComponent<Pick<IconTextFieldProps, keyof IconTextFieldProps> & React.RefAttributes<unknown>>;
export { IconTextField };
