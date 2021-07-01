import React from 'react';
import { ButtonProps } from '../buttons/Button';
export declare type GoogleButtonProps = Partial<Omit<ButtonProps, 'variant'>> & {
    loading?: boolean;
};
declare const GoogleButton: React.ForwardRefExoticComponent<Partial<Omit<ButtonProps, "variant">> & {
    loading?: boolean | undefined;
} & React.RefAttributes<unknown>>;
export { GoogleButton };
