import React from 'react';
import { ButtonProps } from '../buttons/Button';
export declare type FacebookButtonProps = Partial<Omit<ButtonProps, 'variant'>> & {
    loading?: boolean;
};
declare const FacebookButton: React.ForwardRefExoticComponent<Partial<Omit<ButtonProps, "variant">> & {
    loading?: boolean | undefined;
} & React.RefAttributes<unknown>>;
export { FacebookButton };
