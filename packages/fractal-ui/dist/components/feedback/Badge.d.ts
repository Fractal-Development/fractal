import React from 'react';
import { ButtonVariant } from '../interactive';
interface BadgeProps {
    children?: string;
    variant: ButtonVariant;
}
declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<unknown>>;
export { Badge };
