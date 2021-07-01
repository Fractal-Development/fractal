import React from 'react';
import { BaseRowProps } from './BaseRow';
export interface SimpleRowProps extends BaseRowProps {
    title: string;
}
declare const SimpleRow: React.ForwardRefExoticComponent<SimpleRowProps & React.RefAttributes<unknown>>;
export { SimpleRow };
