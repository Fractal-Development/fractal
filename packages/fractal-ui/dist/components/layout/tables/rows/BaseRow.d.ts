import React from 'react';
import { LayerProps } from '../../Layer/types';
export interface BaseRowProps extends LayerProps {
    addSeparator?: boolean;
    disablePadding?: boolean;
}
declare const BaseRow: React.ForwardRefExoticComponent<Pick<BaseRowProps, keyof BaseRowProps> & React.RefAttributes<unknown>>;
declare const MemoizedBaseRow: React.MemoExoticComponent<React.ForwardRefExoticComponent<Pick<BaseRowProps, keyof BaseRowProps> & React.RefAttributes<unknown>>>;
export { BaseRow, MemoizedBaseRow };
