import React from 'react';
import { BaseRowProps } from './BaseRow';
export interface CheckMarkRowProps extends BaseRowProps {
    title: string;
    isSelected: boolean;
}
declare const CheckMarkRow: React.ForwardRefExoticComponent<CheckMarkRowProps & React.RefAttributes<unknown>>;
export { CheckMarkRow };
