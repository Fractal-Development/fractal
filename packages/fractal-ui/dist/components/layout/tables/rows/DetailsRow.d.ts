import React from 'react';
import { BaseRowProps } from './BaseRow';
export interface DetailsRowProps extends BaseRowProps {
    title: string;
    details: string;
}
declare const DetailsRow: React.ForwardRefExoticComponent<Pick<DetailsRowProps, keyof DetailsRowProps> & React.RefAttributes<unknown>>;
export { DetailsRow };
