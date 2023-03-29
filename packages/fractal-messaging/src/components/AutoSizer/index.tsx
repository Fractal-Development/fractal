import React from 'react';
import VirtualizedAutoSizer from 'react-virtualized-auto-sizer';
import { AutoSizerProps } from './types';

export function AutoSizer({ children, onResize }: AutoSizerProps): JSX.Element {
    //@ts-ignore
    return <VirtualizedAutoSizer onResize={onResize}>{children}</VirtualizedAutoSizer>;
}
