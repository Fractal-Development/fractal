import React from 'react';
import { ButtonProps } from '../buttons/Button';
export declare type AppleButtonProps = Partial<Omit<ButtonProps, 'variant'>> & {
    loading?: boolean;
};
declare const AppleButton: React.ForwardRefExoticComponent<Partial<Omit<ButtonProps, "variant">> & {
    loading?: boolean | undefined;
} & React.RefAttributes<unknown>>;
export { AppleButton };
