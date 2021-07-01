import React from 'react';
import { TouchableOpacityProps } from '../buttons/TouchableOpacity/types';
export interface TextFieldButtonProps extends Partial<Omit<TouchableOpacityProps, 'children'>> {
    value?: string;
    placeholder?: string;
    rightImage?: JSX.Element;
}
declare const TextFieldButton: React.ForwardRefExoticComponent<TextFieldButtonProps & React.RefAttributes<unknown>>;
export { TextFieldButton };
