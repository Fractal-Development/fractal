import React from 'react';
import { BaseRowProps } from './BaseRow';
export interface DetailsRowProps extends BaseRowProps {
    title: string;
    details: string;
}
declare const DetailsRow: React.ForwardRefExoticComponent<DetailsRowProps & React.RefAttributes<unknown>>;
export { DetailsRow };
