import React from 'react';
import { ButtonVariant } from '../buttons';
import { IconTextFieldProps } from './IconTextField';
export interface ButtonTextFieldProps extends IconTextFieldProps {
    onSubmitEditing?: (text: string) => void;
    onButtonPress?: (text: string) => void;
    buttonImage?: (color: string, size: number) => JSX.Element;
    buttonVariant?: ButtonVariant;
    buttonText?: string;
    buttonAriaLabel?: string;
    showButton?: boolean;
    useForegroundVariant?: boolean;
}
declare const ButtonTextField: React.ForwardRefExoticComponent<Pick<ButtonTextFieldProps, keyof ButtonTextFieldProps> & React.RefAttributes<unknown>>;
export { ButtonTextField };
